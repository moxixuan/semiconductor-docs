const fs = require('fs').promises;
const path = require('path');

/**
 * 清理并重新生成所有章节的frontmatter
 */
async function cleanAllFrontmatter() {
  const chapters = JSON.parse(
    await fs.readFile('./docs/standards/semi-sidebar.json', 'utf-8')
  );

  console.log(`📝 开始清理 ${chapters.length} 个章节的frontmatter...\n`);

  for (const ch of chapters) {
    const mdFile = `docs/standards/semi/semi-chapter-${ch.id}.md`;
    const content = await fs.readFile(mdFile, 'utf-8');

    // 提取原始内容（跳过frontmatter和import语句）
    const importEnd = content.indexOf('\n\n#');
    const markdownContent = content.substring(importEnd);

    // 获取文件大小
    const pdfFile = `static/pdfs/semi/semi-chapter-${ch.id}.pdf`;
    let pdfSize = '自动检测';
    try {
      const stats = await fs.stat(pdfFile);
      pdfSize = (stats.size / 1024 / 1024).toFixed(2) + 'MB';
    } catch (e) {
      // PDF不存在，使用默认值
    }

    // 生成新的frontmatter
    const frontmatter = `---
title: ${JSON.stringify(ch.title)}
description: "SEMI标准文档"
sidebar_label: ${JSON.stringify(ch.title)}
sidebar_position: ${parseInt(ch.id) * 10}
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-${ch.id}.pdf'
  chapter: ${parseInt(ch.id)}
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

<PdfDownloadCard
  pdfLink="/pdfs/semi/${ch.id}.pdf"
  pdfSize="${pdfSize}"
  title="${ch.title}"
  description="SEMI标准文档，共50页"
/>

`;

    await fs.writeFile(mdFile, frontmatter + markdownContent);
    process.stdout.write('.');
  }

  console.log('\n\n✅ 已更新所有章节的frontmatter');
}

cleanAllFrontmatter().catch(console.error);
