const fs = require('fs').promises;
const path = require('path');

async function fixJSXSyntax() {
  const markdownDir = './docs/standards/semi';
  const files = await fs.readdir(markdownDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.md') || file === 'semi-sidebar.json') continue;

    const filePath = path.join(markdownDir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    const originalLength = content.length;

    // 修复JSX模板字符串：{`text`} → {text}
    content = content.replace(/\{`([^`]*)`\}/g, '{$1}');

    // 移除所有反引号（不包括代码块中的）
    content = content.replace(/`/g, '');

    // 修复被解释为JSX标签的尖括号模式
    // 这些是SEMI标准中的数据结构字段名，不应该被解释为HTML/JSX
    // 模式：单个单词被尖括号包围，如 <PMInformation>, <CEID>, <CAACK> 等
    // 转换为: PMInformation（移除尖括号）或用代码格式

    // 策略：移除看起来像标签但不是常见HTML标签的尖括号
    // 常见HTML标签白名单
    const htmlTags = new Set([
      'div', 'span', 'p', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'strong', 'b', 'em', 'i', 'u', 'a', 'img', 'ul', 'ol', 'li',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre',
      'blockquote', 'dl', 'dt', 'dd', 'figure', 'figcaption',
      'MDXLayout', 'PdfDownloadCard'
    ]);

    // 修复：将 <TagName> 模式中的尖括号移除（如果不是HTML标签）
    content = content.replace(/<([A-Za-z][A-Za-z0-9_]*)>/g, (match, tagName) => {
      if (htmlTags.has(tagName.toLowerCase())) {
        return match; // 保留HTML标签
      }
      return tagName; // 移除尖括号
    });

    // 修复：将 </TagName> 模式中的尖括号移除
    content = content.replace(/<\/([A-Za-z][A-Za-z0-9_]*)>/g, (match, tagName) => {
      if (htmlTags.has(tagName.toLowerCase())) {
        return match; // 保留HTML标签
      }
        return tagName; // 移除尖括号
    });

    // 修复自闭合标签模式：<TagName>...</TagName>
    content = content.replace(/<([A-Za-z][A-Za-z0-9_]*)\s+([^>]*)>/g, (match, tagName, rest) => {
      if (htmlTags.has(tagName.toLowerCase())) {
        return match; // 保留HTML标签
      }
      // 移除尖括号但保留内容
        return `${tagName} ${rest}`;
    });

    // 移除所有剩余的反引号（如果有）
    content = content.replace(/`/g, '');

    await fs.writeFile(filePath, content);
    count++;
    if (content.length !== originalLength) {
      process.stdout.write('.');
    }
  }

  console.log(`\n✅ 已修复 ${count} 个Markdown文件`);
}

fixJSXSyntax().catch(console.error);
