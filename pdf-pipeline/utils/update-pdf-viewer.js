const fs = require('fs').promises;
const path = require('path');

/**
 * 为所有SEMI章节添加PDF查看器组件
 */
async function addPdfViewerToAllChapters() {
  const docsDir = './docs/standards/semi';
  const files = await fs.readdir(docsDir);
  const mdFiles = files.filter(f => f.startsWith('semi-chapter-') && f.endsWith('.md')).sort();

  console.log(`📝 开始更新 ${mdFiles.length} 个章节...`);

  for (const mdFile of mdFiles) {
    const filePath = path.join(docsDir, mdFile);

    try {
      let content = await fs.readFile(filePath, 'utf-8');

      // 检查是否已经有PdfViewer组件
      if (content.includes('PdfViewer')) {
        console.log(`⊙ 跳过 ${mdFile} (已有PdfViewer)`);
        continue;
      }

      // 提取章节ID
      const chapterId = mdFile.replace('semi-chapter-', '').replace('.md', '');

      // 在import部分添加PdfViewer导入
      if (!content.includes('PdfViewer')) {
        content = content.replace(
          "import PdfDownloadCard from '@site/src/components/PdfDownloadCard';",
          "import PdfDownloadCard from '@site/src/components/PdfDownloadCard';\nimport PdfViewer from '@site/src/components/PdfViewer';"
        );
      }

      // 在PdfDownloadCard之后添加分隔符和PdfViewer组件
      content = content.replace(
        /(PdfDownloadCard[\s\S]*?\/>\n\n)/,
        `$1---\n\n## 📖 查看PDF原文档（包含完整图表和格式）\n\n<PdfViewer pdfPath="/pdfs/semi/${chapterId.padStart(3, '0')}.pdf" />\n\n`
      );

      await fs.writeFile(filePath, content);
      console.log(`✅ 更新: ${mdFile}`);

    } catch (error) {
      console.error(`❌ 更新失败 ${mdFile}:`, error.message);
    }
  }

  console.log('\n✅ 所有章节已更新！');
}

// 执行更新
addPdfViewerToAllChapters().catch(console.error);
