const fs = require('fs').promises;
const path = require('path');

async function fixJSXSyntax() {
  const markdownDir = './docs/standards/semi';
  const files = await fs.readdir(markdownDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(markdownDir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    // 修复JSX模板字符串：{`text`} → {text}
    content = content.replace(/\{`([^`]*)`\}/g, '{$1}');

    // 移除所有反引号
    content = content.replace(/`/g, '');

    await fs.writeFile(filePath, content);
    count++;
  }

  console.log(`✅ 已修复 ${count} 个Markdown文件`);
}

fixJSXSyntax().catch(console.error);
