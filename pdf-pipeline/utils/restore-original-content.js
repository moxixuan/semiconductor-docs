const fs = require('fs').promises;
const path = require('path');

async function restoreOriginalContent() {
  const sourceDir = './data/markdown/split';
  const targetDir = './docs/standards/semi';

  const files = await fs.readdir(targetDir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f.startsWith('semi-chapter-'));

  console.log(`📝 开始恢复 ${mdFiles.length} 个章节的完整内容...\n`);

  for (const file of mdFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // 读取原始文件
    const sourceContent = await fs.readFile(sourcePath, 'utf-8');
    const parts = sourceContent.split(/---/);

    if (parts.length < 3) {
      console.log(`⚠️  ${file}: 格式异常，跳过`);
      continue;
    }

    // 提取原始frontmatter和正文
    const originalFrontmatter = parts[1];
    const originalBody = parts.slice(2).join('---');

    // 读取当前文件（获取更新后的frontmatter）
    const currentContent = await fs.readFile(targetPath, 'utf-8');
    const currentParts = currentContent.split(/---/);
    const currentFrontmatter = currentParts[1];

    // 使用更新后的frontmatter + 原始正文
    let newContent = `---${currentFrontmatter}---\n\nimport PdfDownloadCard from '@site/src/components/PdfDownloadCard';\n\n`;

    // 提取PdfDownloadCard部分（从原始内容中）
    const pdfCardMatch = originalBody.match(/<PdfDownloadCard[\s\S]*?\/>/);
    if (pdfCardMatch) {
      // 更新PDF路径
      let pdfCard = pdfCardMatch[0].replace(/pdfLink="\/pdfs\/split\//g, 'pdfLink="/pdfs/semi/');
      pdfCard = pdfCard.replace(/pdfLink='\/pdfs\/split\//g, "pdfLink='/pdfs/semi/");
      newContent += pdfCard + '\n\n';
    }

    // 添加原始正文（移除开头的标题等）
    const bodyContent = originalBody.replace(/# 文档标题[\s\S]*?(?=#|$)/, '');
    newContent += bodyContent;

    await fs.writeFile(targetPath, newContent);
    console.log(`✅ ${file}`);
  }

  console.log(`\n✅ 已恢复所有章节的完整内容`);
}

restoreOriginalContent().catch(console.error);
