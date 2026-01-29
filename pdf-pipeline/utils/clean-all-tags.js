const fs = require('fs').promises;

async function cleanAllTags() {
  const files = await fs.readdir('docs/standards/semi');
  const mdFiles = files.filter(f => f.endsWith('.md'));

  console.log(`📝 清理 ${mdFiles.length} 个文件的标签...\n`);

  for (const file of mdFiles) {
    const filePath = `docs/standards/semi/${file}`;
    let content = await fs.readFile(filePath, 'utf-8');

    // 只处理正文内容（在PdfDownloadCard之后）
    const parts = content.split(/<\/?PdfDownloadCard/);

    if (parts.length >= 3) {
      // parts[0] = frontmatter + import
      // parts[1] = PdfDownloadCard内容
      // parts[2] = 之后的正文

      const header = parts.slice(0, 2).join('PdfDownloadCard');
      let body = parts.slice(2).join('PdfDownloadCard');

      // 移除所有大写字母开头的标签（这些通常是数据结构定义，不是HTML）
      // 保留小写的HTML标签
      body = body.replace(/<\/?([A-Z][A-Za-z0-9_]*)/g, ' $1 ');

      // 移除XML命名空间标签
      body = body.replace(/<\/?[a-z]+:[^>]*>/gi, ' ');

      // 移除XML声明
      body = body.replace(/<\?xml[^>]*>/gi, ' ');

      content = header + body;
      await fs.writeFile(filePath, content);
    }

    process.stdout.write('.');
  }

  console.log('\n\n✅ 清理完成');
}

cleanAllTags().catch(console.error);
