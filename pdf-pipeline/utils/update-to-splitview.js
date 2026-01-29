const fs = require('fs').promises;
const path = require('path');

/**
 * 更新MDX文件使用新的SplitView组件
 */
async function updateToSplitView() {
  const docsDir = './docs/standards/semi';

  // 测试：只更新前5个文件
  const testFiles = [
    'semi-chapter-001.md',
    'semi-chapter-002.md',
    'semi-chapter-003.md',
    'semi-chapter-004.md',
    'semi-chapter-005.md'
  ];

  console.log(`🔄 开始更新 ${testFiles.length} 个试点文件...\n`);

  for (const mdFile of testFiles) {
    const filePath = path.join(docsDir, mdFile);

    try {
      let content = await fs.readFile(filePath, 'utf-8');

      // 检查是否已经更新过
      if (content.includes('PdfSplitView')) {
        console.log(`⊙ 跳过 ${mdFile} (已使用PdfSplitView)`);
        continue;
      }

      // 提取章节ID
      const chapterId = mdFile.replace('semi-chapter-', '').replace('.md', '');

      // 提取frontmatter信息
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatterMatch) {
        console.log(`⊙ 跳过 ${mdFile} (找不到frontmatter)`);
        continue;
      }

      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title: "([^"]+)"/);
      const title = titleMatch ? titleMatch[1] : `SEMI Chapter ${chapterId}`;

      // 提取Markdown内容（从第一个<!-- Page -->之后开始）
      const contentParts = content.split(/^---\n[\s\S]*?\n---\n\n/);
      if (contentParts.length < 2) {
        console.log(`⊙ 跳过 ${mdFile} (内容格式不匹配)`);
        continue;
      }

      const markdownContent = contentParts[1]
        .replace(/import PdfDownloadCard[\s\S]*?\n\n/, '')
        .replace(/<PdfDownloadCard[\s\S]*?\/>\n\n/, '')
        .replace(/---\n\n## 📖 查看PDF原文档[\s\S]*?<PdfViewer[\s\S]*?\/>\n\n/, '')
        .replace(/import PdfViewer[\s\S]*?\n\n/, '')
        .trim();

      // 生成新内容
      const newContent = `---
title: "${title}"
description: "SEMI标准文档"
sidebar_label: "${title}"
sidebar_position: ${parseInt(chapterId)}
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-${chapterId}.pdf'
  chapter: ${chapterId}
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';
import PdfSplitView from '@site/src/components/PdfSplitView';

<PdfDownloadCard
  pdfLink="/pdfs/semi/${chapterId.padStart(3, '0')}.pdf"
  pdfSize="N/A"
  title="${title}"
  description="SEMI标准文档，共50页"
/>

---

## 📖 并排查看：Markdown文本 + PDF原文档

<PdfSplitView pdfPath="/pdfs/semi/${chapterId.padStart(3, '0')}.pdf">

${markdownContent}

</PdfSplitView>
`;

      await fs.writeFile(filePath, newContent);
      console.log(`✅ 更新: ${mdFile}`);

    } catch (error) {
      console.error(`❌ 更新失败 ${mdFile}:`, error.message);
    }
  }

  console.log(`\n✅ 试点文件更新完成！`);
  console.log(`\n请测试以下功能:`);
  console.log(`1. 拖拽中间分隔条调整宽度`);
  console.log(`2. 点击按钮折叠/展开面板`);
  console.log(`3. 移动端响应式布局`);
  console.log(`4. localStorage状态保存`);
}

// 执行更新
updateToSplitView().catch(console.error);
