const fs = require('fs').promises;
const path = require('path');

/**
 * 批量更新所有SEMI章节使用PdfSplitView组件
 */
async function batchUpdateAllChapters() {
  const docsDir = './docs/standards/semi';
  const files = await fs.readdir(docsDir);
  const mdFiles = files.filter(f => f.startsWith('semi-chapter-') && f.endsWith('.md')).sort();

  console.log(`🔄 开始批量更新 ${mdFiles.length} 个文件...\n`);

  const results = {
    success: [],
    skipped: [],
    failed: []
  };

  for (const mdFile of mdFiles) {
    const filePath = path.join(docsDir, mdFile);

    try {
      let content = await fs.readFile(filePath, 'utf-8');

      // 检查是否已经使用PdfSplitView
      if (content.includes('PdfSplitView')) {
        results.skipped.push({ file: mdFile, reason: '已使用PdfSplitView' });
        console.log(`⊙ 跳过 ${mdFile} (已更新)`);
        continue;
      }

      // 提取章节ID
      const chapterId = mdFile.replace('semi-chapter-', '').replace('.md', '');

      // 提取frontmatter
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatterMatch) {
        results.failed.push({ file: mdFile, reason: '找不到frontmatter' });
        console.log(`⊙ 跳过 ${mdFile} (无frontmatter)`);
        continue;
      }

      const frontmatter = frontmatterMatch[1];

      // 提取PDF路径
      const pdfPathMatch = frontmatter.match(/source_file: 'semi-chapter-([0-9]+)\.pdf'/);
      const pdfId = pdfPathMatch ? pdfPathMatch[1] : chapterId.padStart(3, '0');

      // 提取标题
      const titleMatch = frontmatter.match(/title: "([^"]+)"/);
      const title = titleMatch ? titleMatch[1] : `SEMI Chapter ${chapterId}`;

      // 提取主要内容（移除旧的import和组件调用）
      let mainContent = content
        // 移除旧的import语句
        .replace(/import PdfDownloadCard[\s\S]*?\n\n/g, '')
        .replace(/import PdfViewer[\s\S]*?\n\n/g, '')
        // 移除PdfDownloadCard组件
        .replace(/<PdfDownloadCard[\s\S]*?\/>\n\n/g, '')
        // 移除旧的分隔符和标题
        .replace(/---\n\n## 📖 查看PDF原文档[\s\S]*?<PdfViewer[\s\S]*?\/>\n\n/g, '')
        // 移除多余的空行
        .replace(/^\n+/, '')
        .trim();

      // 生成新内容
      const newContent = `---
${frontmatter}
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';
import PdfSplitView from '@site/src/components/PdfSplitView';

<PdfDownloadCard
  pdfLink="/pdfs/semi/${pdfId}.pdf"
  pdfSize="N/A"
  title="${title}"
  description="SEMI标准文档"
/>

---

## 📖 并排查看：Markdown文本 + PDF原文档

<PdfSplitView pdfPath="/pdfs/semi/${pdfId}.pdf">

${mainContent}

</PdfSplitView>
`;

      // 写入文件
      await fs.writeFile(filePath, newContent);
      results.success.push(mdFile);
      console.log(`✅ 更新: ${mdFile}`);

    } catch (error) {
      results.failed.push({ file: mdFile, reason: error.message });
      console.error(`❌ 失败: ${mdFile} - ${error.message}`);
    }
  }

  // 输出统计报告
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 批量更新完成统计`);
  console.log(`${'='.repeat(60)}`);
  console.log(`✅ 成功: ${results.success.length} 个`);
  console.log(`⊙ 跳过: ${results.skipped.length} 个`);
  console.log(`❌ 失败: ${results.failed.length} 个`);
  console.log(`${'='.repeat(60)}`);

  if (results.failed.length > 0) {
    console.log(`\n❌ 失败的文件:`);
    results.failed.forEach(({ file, reason }) => {
      console.log(`  - ${file}: ${reason}`);
    });
  }

  console.log(`\n💡 提示: 运行 'npm run build' 来构建网站`);
  console.log(`🌐 访问: https://moxixuan.github.io/semiconductor-docs/`);
}

// 执行批量更新
batchUpdateAllChapters().catch(console.error);
