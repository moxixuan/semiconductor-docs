const fs = require('fs').promises;
const path = require('path');
const { getDocument } = require('pdfjs-dist/legacy/build/pdf');
const TurndownService = require('turndown');

/**
 * 专业的PDF转Markdown转换器
 * 使用PDF.js提取内容，然后用Turndown转换为Markdown
 */
async function convertPdfToMarkdown(pdfPath, outputPath, pdfInfo) {
  console.log(`📄 转换: ${path.basename(pdfPath)}`);

  // 读取PDF文件
  const dataBuffer = await fs.readFile(pdfPath);
  const data = new Uint8Array(dataBuffer);
  const loadingTask = getDocument(data);
  const pdf = await loadingTask.promise;

  // 初始化Turndown服务
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
  });

  // 自定义规则来处理特殊内容
  turndownService.addRule('strikethrough', {
    filter: (node) => node.style && node.style.textDecoration === 'line-through',
    replacement: (content) => `~~${content}~~`
  });

  let markdownContent = '';
  const numPages = pdf.numPages;

  // 逐页提取内容
  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

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
    markdownContent += `\n\n<!-- Page ${pageNum} -->\n\n${markdown}`;
  }

  // 清理和优化Markdown（在合并frontmatter之前）
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
  console.log(`✅ 完成: ${path.basename(outputPath)}`);

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
 * 批量转换所有章节
 */
async function convertAllChapters() {
  const pdfDir = './static/pdfs/semi';
  const outputDir = './docs/standards/semi';

  const files = await fs.readdir(pdfDir);
  const pdfFiles = files.filter(f => f.endsWith('.pdf')).sort();

  console.log(`📚 开始转换 ${pdfFiles.length} 个PDF文件...\n`);

  let successCount = 0;
  let failCount = 0;

  // 转换所有文件
  for (const pdfFile of pdfFiles) {
    const pdfPath = path.join(pdfDir, pdfFile);
    const chapterId = pdfFile.replace('semi-chapter-', '').replace('.pdf', '');
    const outputPath = path.join(outputDir, `semi-chapter-${chapterId}.md`);

    // 提取frontmatter信息
    const pdfInfo = await extractFrontmatterInfo(chapterId);

    try {
      await convertPdfToMarkdown(pdfPath, outputPath, pdfInfo);
      successCount++;
    } catch (error) {
      console.error(`❌ 转换失败 ${pdfFile}:`, error.message);
      failCount++;
    }
  }

  console.log(`\n✅ 转换完成！成功: ${successCount}, 失败: ${failCount}`);
  console.log(`\n文件已直接更新到 ${outputDir}`);
}

// 执行转换
convertAllChapters().catch(console.error);
