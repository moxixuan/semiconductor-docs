const fs = require('fs').promises;
const path = require('path');

async function restoreContentClean() {
  const sourceDir = './data/markdown/split';
  const targetDir = './docs/standards/semi';

  const files = await fs.readdir(targetDir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f.startsWith('semi-chapter-'));

  console.log(`📝 开始恢复 ${mdFiles.length} 个章节...\n`);

  for (const file of mdFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // 读取原始文件
    const sourceContent = await fs.readFile(sourcePath, 'utf-8');

    // 读取当前文件（获取更新后的frontmatter）
    const currentContent = await fs.readFile(targetPath, 'utf-8');
    const currentParts = currentContent.split(/---/);

    if (currentParts.length < 2) {
      console.log(`⚠️  ${file}: frontmatter格式异常`);
      continue;
    }

    const currentFrontmatter = currentParts[1];

    // 提取章节号
    const chapterMatch = file.match(/semi-chapter-(\d+)\.md/);
    const chapterId = chapterMatch ? chapterMatch[1] : '001';

    // 提取标准标题
    const titleMatch = currentFrontmatter.match(/title: "([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : `Chapter ${chapterId}`;

    // 获取PDF文件大小
    const pdfPath = `./static/pdfs/semi/semi-chapter-${chapterId}.pdf`;
    let pdfSize = '0.67MB';
    try {
      const stats = await fs.stat(pdfPath);
      pdfSize = (stats.size / 1024 / 1024).toFixed(2) + 'MB';
    } catch (e) {
      // PDF不存在，使用默认值
    }

    // 构建新内容
    let newContent = `---${currentFrontmatter}---\n\n`;
    newContent += `import PdfDownloadCard from '@site/src/components/PdfDownloadCard';\n\n`;
    newContent += `<PdfDownloadCard\n`;
    newContent += `  pdfLink="/pdfs/semi/${chapterId}.pdf"\n`;
    newContent += `  pdfSize="${pdfSize}"\n`;
    newContent += `  title="${title}"\n`;
    newContent += `  description="SEMI标准文档，共50页"\n`;
    newContent += `/>\n\n`;

    // 跳过原始文件中的frontmatter和import部分，只保留正文
    const bodyMatch = sourceContent.match(/# 文档标题\s*([\s\S]*)/);
    if (bodyMatch) {
      newContent += bodyMatch[1];
    } else {
      // 如果没有找到文档标题，保留除frontmatter外的所有内容
      const parts = sourceContent.split(/---/);
      if (parts.length >= 3) {
        newContent += parts.slice(2).join('---');
      }
    }

    await fs.writeFile(targetPath, newContent);
    process.stdout.write('.');
  }

  console.log(`\n\n✅ 已恢复所有章节`);
}

restoreContentClean().catch(console.error);
