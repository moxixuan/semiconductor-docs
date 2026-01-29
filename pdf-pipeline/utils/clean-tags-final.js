const fs = require('fs');

const files = fs.readdirSync('docs/standards/semi').filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = `docs/standards/semi/${file}`;
  let content = fs.readFileSync(filePath, 'utf-8');

  const original = content;

  // 清理所有可能的标签模式
  content = content.replace(/<\/?[a-z0-9_]+>/gi, ' '); // 移除所有小写标签
  content = content.replace(/<\?[a-z0-9_]+/gi, ' '); // 移除自闭合标签的开始部分

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${file}`);
  }
}

console.log('\n✅ 清理完成');
