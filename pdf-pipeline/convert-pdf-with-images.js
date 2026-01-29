const fs = require('fs').promises;
const path = require('path');
const { getDocument } = require('pdfjs-dist/legacy/build/pdf');
const TurndownService = require('turndown');
const canvas = require('canvas');

/**
 * 带图片的PDF转Markdown转换器
 * 将PDF页面转换为图片并嵌入到Markdown中
 */
async function convertPdfToMarkdownWithImages(pdfPath, outputPath, pdfInfo) {
  console.log(`📄 转换: ${path.basename(pdfPath)} (带图片)`);

  // 读取PDF文件
  const dataBuffer = await fs.readFile(pdfPath);
  const data = new Uint8Array(dataBuffer);
  const loadingTask = getDocument(data);
  const pdf = await loadingTask.promise;

  // 创建图片输出目录
  const imagesDir = path.join(path.dirname(outputPath), 'images');
  await fs.mkdir(imagesDir, { recursive: true });

  // 初始化Turndown服务
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
  });

  let markdownContent = '';
  const numPages = pdf.numPages;
  const chapterId = path.basename(pdfPath).replace('semi-chapter-', '').replace('.pdf', '');

  // 逐页提取内容和图片
  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);

    // 1. 将页面渲染为图片
    const viewport = page.getViewport({ scale: 2.0 }); // 2x scale for better quality
    const canvasObj = canvas.createCanvas(viewport.width, viewport.height);
    const context = canvasObj.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    // 保存图片
    const imagePath = path.join(imagesDir, `page-${pageNum}.png`);
    const buffer = canvasObj.toBuffer('image/png');
    await fs.writeFile(imagePath, buffer);
    console.log(`  ✅ Page ${pageNum} 图片已保存`);

    // 2. 提取文本内容（可选，如果需要可搜索的文本）
    const textContent = await page.getTextContent();
    let text = '';

    // 将文本内容转换为结构化HTML
    let html = '';
    let lastY = null;
    let items = textContent.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // 检测新段落（根据Y坐标）
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 20) {
        html += '\n\n';
      }
      lastY = item.transform[5];

      // 提取文本
      if (item.str) {
        html += item.str;
      }
    }

    // 转换HTML为Markdown
    const markdown = turndownService.turndown(html);

    // 添加到内容中：图片 + 文本
    const imageUrl = `/images/standards/semi/${chapterId}/page-${pageNum}.png`;
    markdownContent += `\n\n## Page ${pageNum}\n\n`;
    markdownContent += `![Page ${pageNum}](${imageUrl})\n\n`;

    // 如果有文本内容，也添加进去
    if (markdown.trim()) {
      markdownContent += `<details>\n<summary>查看文本内容</summary>\n\n${markdown}\n\n</details>\n\n`;
    }
  }

  // 清理和优化Markdown
  markdownContent = cleanupMarkdown(markdownContent);

  // 添加frontmatter和PDF下载卡片
  const frontmatter = `---
title: "${pdfInfo.title}"
description: "SEMI标准文档"
sidebar_label: "${pdfInfo.sidebar_label}"
sidebar_position: ${pdfInfo.chapter}
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: '${pdfInfo.source_file}'
  chapter: ${pdfInfo.chapter}
  page_count: ${pdfInfo.page_count}
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

<PdfDownloadCard
  pdfLink="${pdfInfo.pdfLink}"
  pdfSize="${pdfInfo.pdfSize}"
  title="${pdfInfo.title}"
  description="${pdfInfo.description}"
/>

`;

  // 合并frontmatter、组件和内容
  const finalContent = frontmatter + markdownContent;

  await fs.writeFile(outputPath, finalContent);
  console.log(`✅ 完成: ${path.basename(outputPath)} (${numPages} 页)`);

  // 清理
  await pdf.destroy();
}

/**
 * 清理和优化Markdown内容
 */
function cleanupMarkdown(content) {
  // 移除过多的空行
  content = content.replace(/\n{3,}/g, '\n\n');

  // 修复表格格式（如果有的话）
  content = content.replace(/\|{3,}/g, '|');

  // 修复JSX相关的模式 - 这些会被MDX解释为JSX语法
  // 转义所有花括号，避免被解释为JSX
  content = content.replace(/\{/g, '&#123;');
  content = content.replace(/\}/g, '&#125;');

  // 转义所有尖括号，避免被解释为JSX标签
  content = content.replace(/</g, '&lt;');
  content = content.replace(/>/g, '&gt;');

  // 清理特殊字符
  content = content.replace(/[^\x00-\x7F]/g, (char) => {
    // 保留常用的特殊字符
    if (['©', '®', '™', '°', '±', '≤', '≥', 'µ', 'Ω'].includes(char)) {
      return char;
    }
    return ''; // 移除其他不可打印字符
  });

  return content;
}

/**
 * 从现有MD文件提取frontmatter信息
 */
async function extractFrontmatterInfo(chapterId) {
  const existingPath = `./docs/standards/semi/semi-chapter-${chapterId}.md`;

  try {
    const content = await fs.readFile(existingPath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title: "([^"]+)"/);
      const chapterMatch = frontmatter.match(/chapter: (\d+)/);
      const pageCountMatch = frontmatter.match(/page_count: (\d+)/);
      const sourceFileMatch = frontmatter.match(/source_file: '([^']+)'/);

      return {
        title: titleMatch ? titleMatch[1] : `SEMI Chapter ${chapterId}`,
        sidebar_label: titleMatch ? titleMatch[1] : `SEMI Chapter ${chapterId}`,
        chapter: chapterMatch ? parseInt(chapterMatch[1]) : parseInt(chapterId),
        page_count: pageCountMatch ? parseInt(pageCountMatch[1]) : 1,
        source_file: sourceFileMatch ? sourceFileMatch[1] : `semi-chapter-${chapterId}.pdf`,
        pdfLink: `/pdfs/semi/${chapterId.padStart(3, '0')}.pdf`,
        pdfSize: 'N/A',
        description: `SEMI标准文档，共${pageCountMatch ? pageCountMatch[1] : '?'}页`
      };
    }
  } catch (error) {
    // 文件不存在，使用默认值
  }

  // 默认值
  return {
    title: `SEMI Chapter ${chapterId}`,
    sidebar_label: `SEMI Chapter ${chapterId}`,
    chapter: parseInt(chapterId),
    page_count: 1,
    source_file: `semi-chapter-${chapterId}.pdf`,
    pdfLink: `/pdfs/semi/${chapterId.padStart(3, '0')}.pdf`,
    pdfSize: 'N/A',
    description: 'SEMI标准文档'
  };
}

/**
 * 批量转换所有章节（带图片）
 */
async function convertAllChaptersWithImages() {
  const pdfDir = './static/pdfs/semi';
  const outputDir = './docs/standards/semi';

  const files = await fs.readdir(pdfDir);
  const pdfFiles = files.filter(f => f.endsWith('.pdf')).sort();

  console.log(`📚 开始转换 ${pdfFiles.length} 个PDF文件（带图片）...\n`);

  // 测试：只转换前3个
  const testFiles = pdfFiles.slice(0, 3);

  let successCount = 0;
  let failCount = 0;

  for (const pdfFile of testFiles) {
    const pdfPath = path.join(pdfDir, pdfFile);
    const chapterId = pdfFile.replace('semi-chapter-', '').replace('.pdf', '');
    const outputPath = path.join(outputDir, `semi-chapter-${chapterId}.md`);

    // 提取frontmatter信息
    const pdfInfo = await extractFrontmatterInfo(chapterId);

    try {
      await convertPdfToMarkdownWithImages(pdfPath, outputPath, pdfInfo);
      successCount++;
    } catch (error) {
      console.error(`❌ 转换失败 ${pdfFile}:`, error.message);
      failCount++;
    }
  }

  console.log(`\n✅ 转换完成！成功: ${successCount}, 失败: ${failCount}`);
  console.log(`\n文件已更新到 ${outputDir}`);
  console.log(`图片保存在 ${outputDir}/images/`);
}

// 执行转换
convertAllChaptersWithImages().catch(console.error);
