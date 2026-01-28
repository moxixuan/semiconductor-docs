const PDFDocument = require('pdf-lib');
const fs = require('fs').promises;
const path = require('path');
const { PDFExtractor } = require('../converters/pdf-to-markdown');

/**
 * PDF分割器
 * 将大型PDF按章节分割成多个小PDF
 */
class PDFSplitter {
  constructor(options = {}) {
    this.outputDir = options.outputDir || './data/pdfs/split';
    this.markdownDir = options.markdownDir || './data/markdown/split';
    this.minChapterPages = options.minChapterPages || 10; // 最小章节数
  }

  /**
   * 分析PDF结构，识别章节
   */
  async analyzeStructure(pdfPath) {
    console.log('📊 分析PDF结构...');

    const data = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.PDFDocument.load(data);

    const totalPages = pdfDoc.getPageCount();
    console.log(`   总页数: ${totalPages}`);

    // 这里简化处理：每50页为一个章节
    // 实际应该解析PDF的目录结构
    const chapters = [];
    const pagesPerChapter = 50;

    for (let i = 0; i < totalPages; i += pagesPerChapter) {
      const endPage = Math.min(i + pagesPerChapter - 1, totalPages - 1);
      chapters.push({
        id: Math.floor(i / pagesPerChapter) + 1,
        title: `Chapter ${Math.floor(i / pagesPerChapter) + 1}`,
        startPage: i,
        endPage: endPage,
        pageCount: endPage - i + 1,
      });
    }

    console.log(`   识别到 ${chapters.length} 个章节`);
    return chapters;
  }

  /**
   * 分割PDF并转换每个章节
   */
  async splitAndProcess(pdfPath, chapters) {
    console.log('\n✂️  开始分割PDF...\n');

    // 创建输出目录
    await fs.mkdir(this.outputDir, { recursive: true });
    await fs.mkdir(this.markdownDir, { recursive: true });

    const data = await fs.readFile(pdfPath);
    const sourcePdf = await PDFDocument.PDFDocument.load(data);
    const totalPages = sourcePdf.getPageCount();

    const results = [];

    // 处理每个章节
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      console.log(`\n[${i + 1}/${chapters.length}] 处理: ${chapter.title}`);
      console.log(`   页码: ${chapter.startPage} - ${chapter.endPage}`);

      try {
        // 创建新PDF
        const newPdf = await PDFDocument.PDFDocument.create();

        // 复制页面范围
        const pageIndices = [];
        for (let p = chapter.startPage; p <= chapter.endPage && p < totalPages; p++) {
          pageIndices.push(p);
        }

        if (pageIndices.length === 0) {
          console.log(`   ⚠️  跳过（无有效页面）`);
          continue;
        }

        const copiedPages = await newPdf.copyPages(sourcePdf, pageIndices);
        copiedPages.forEach((page) => newPdf.addPage(page));

        // 保存分割后的PDF
        const pdfFileName = `semi-chapter-${String(chapter.id).padStart(3, '0')}.pdf`;
        const pdfPath = path.join(this.outputDir, pdfFileName);
        const pdfBytes = await newPdf.save();
        await fs.writeFile(pdfPath, pdfBytes);

        const stats = await fs.stat(pdfPath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

        console.log(`   ✅ PDF保存: ${pdfFileName} (${sizeMB}MB, ${copiedPages.length}页)`);

        results.push({
          chapter: chapter.id,
          title: chapter.title,
          pdfPath,
          pdfFileName,
          sizeMB,
          pageCount: copiedPages.length,
        });
      } catch (error) {
        console.error(`   ❌ 错误: ${error.message}`);
        results.push({
          chapter: chapter.id,
          title: chapter.title,
          error: error.message,
        });
      }
    }

    return results;
  }

  /**
   * 批量转换分割后的PDF为Markdown
   */
  async convertToMarkdown(results) {
    console.log('\n📝 转换为Markdown...\n');

    const PDFToMarkdownConverter = require('../converters/pdf-to-markdown');
    const MetadataExtractor = require('../extractors/metadata-extractor');

    const converter = new PDFToMarkdownConverter();
    const extractor = new MetadataExtractor();

    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (result.error || !result.pdfPath) continue;

      console.log(`\n[${i + 1}/${results.length}] 转换: ${result.pdfFileName}`);

      try {
        // 转换PDF
        const convertResult = await converter.convert(result.pdfPath);
        const metadata = await extractor.extract(result.pdfPath, convertResult.markdown);

        // 保存Markdown
        const mdFileName = result.pdfFileName.replace('.pdf', '.md');
        const mdPath = path.join(this.markdownDir, mdFileName);

        const frontmatter = this.generateFrontmatter(metadata, result);
        const finalMarkdown = frontmatter + convertResult.markdown;

        await fs.writeFile(mdPath, finalMarkdown, 'utf-8');

        console.log(`   ✅ Markdown: ${mdFileName}`);
        console.log(`      章节数: ${convertResult.metadata.chapters.length}`);
        console.log(`      字数: ${convertResult.markdown.split(/\s+/).length}`);
      } catch (error) {
        console.error(`   ❌ 错误: ${error.message}`);
      }
    }
  }

  /**
   * 生成frontmatter
   */
  generateFrontmatter(metadata, chapterInfo) {
    return `---
title: "${metadata.structure.title || chapterInfo.title}"
description: "${metadata.classification.summary || 'SEMI标准文档'}"
sidebar_label: "${chapterInfo.title}"
sidebar_position: ${chapterInfo.chapter * 10}
tags: ['SEMI', 'Standard', '${chapterInfo.title}']
custom_props:
  source_type: 'pdf'
  source_file: '${chapterInfo.pdfFileName}'
  chapter: ${chapterInfo.chapter}
  page_count: ${chapterInfo.pageCount}
  file_size_mb: ${chapterInfo.sizeMB}
  processing_date: '${new Date().toISOString()}'
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

<PdfDownloadCard
  pdfLink="/pdfs/split/${chapterInfo.pdfFileName}"
  pdfSize="${chapterInfo.sizeMB}MB"
  title="${chapterInfo.title}"
  description="SEMI标准文档 - ${chapterInfo.title}，共${chapterInfo.pageCount}页"
/>

`;
  }

  /**
   * 执行完整的分割和转换流程
   */
  async process(pdfPath) {
    console.log('🚀 开始处理PDF分割...\n');

    // 1. 分析结构
    const chapters = await this.analyzeStructure(pdfPath);

    // 2. 分割PDF
    const splitResults = await this.splitAndProcess(pdfPath, chapters);

    // 3. 转换为Markdown
    await this.convertToMarkdown(splitResults);

    console.log('\n✅ 处理完成！');
    console.log(`\n📊 统计:`);
    console.log(`   成功分割: ${splitResults.filter(r => !r.error).length} 个`);
    console.log(`   失败: ${splitResults.filter(r => r.error).length} 个`);
    console.log(`   PDF目录: ${this.outputDir}`);
    console.log(`   Markdown目录: ${this.markdownDir}`);
  }
}

module.exports = PDFSplitter;
