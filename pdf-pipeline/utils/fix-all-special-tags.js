const fs = require('fs').promises;
const path = require('path');

async function fixAllSpecialTags() {
  const markdownDir = './docs/standards/semi';
  const files = await fs.readdir(markdownDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.md') || file === 'semi-sidebar.json') continue;

    const filePath = path.join(markdownDir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    const originalLength = content;

    // 1. Remove all backticks (from template literals)
    content = content.replace(/`/g, '');

    // 2. Remove XML declarations
    content = content.replace(/<\?xml[^?]*\?>\s*/g, '');

    // 3. Remove ALL angle brackets from ANY tag-like pattern
    // This is aggressive but will handle all edge cases
    // Pattern: <anything> or </anything> or <anything .../>
    // We'll remove the angle brackets but keep the content

    // Pattern 1: <TagName ...> - opening tags with possible attributes
    content = content.replace(/<([A-Za-z][A-Za-z0-9_\-\.]*)(\s[^>]*)?>/g, (match, tagName, attrs) => {
      // Check if it's a common HTML tag we should preserve
      const htmlTags = ['p', 'div', 'span', 'strong', 'em', 'b', 'i', 'u', 'a', 'img',
        'ul', 'ol', 'li', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre', 'blockquote',
        'MDXLayout', 'PdfDownloadCard'];
      if (htmlTags.includes(tagName)) {
        return match; // Keep HTML/JSX tags
      }
      // Remove angle brackets
      return attrs ? `${tagName}${attrs}` : tagName;
    });

    // Pattern 2: </TagName> - closing tags
    content = content.replace(/<\/([A-Za-z][A-Za-z0-9_\-\.]*)>/g, (match, tagName) => {
      const htmlTags = ['p', 'div', 'span', 'strong', 'em', 'b', 'i', 'u', 'a', 'img',
        'ul', 'ol', 'li', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre', 'blockquote',
        'MDXLayout', 'PdfDownloadCard'];
      if (htmlTags.includes(tagName)) {
        return match; // Keep HTML/JSX closing tags
      }
      return tagName; // Remove angle brackets
    });

    // Pattern 3: Self-closing tags <TagName .../>
    content = content.replace(/<([A-Za-z][A-Za-z0-9_\-\.]*)(\s[^>]*)?\/>/g, (match, tagName, attrs) => {
      const htmlTags = ['p', 'div', 'span', 'strong', 'em', 'b', 'i', 'u', 'a', 'img',
        'ul', 'ol', 'li', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre', 'blockquote',
        'MDXLayout', 'PdfDownloadCard'];
      if (htmlTags.includes(tagName)) {
        return match; // Keep HTML/JSX self-closing tags
      }
      return attrs ? `${tagName}${attrs}` : tagName; // Remove angle brackets and slash
    });

    // Pattern 4: Empty tags <>
    content = content.replace(/<>\s*/g, '');

    // 5. Handle CDATA sections
    content = content.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, 'CDATA $1 CDATA');

    // 6. Handle namespace attributes like xmlns:xs=, xmlns:soap=
    content = content.replace(/xmlns:[a-z]+=/gi, 'xmlns-');

    await fs.writeFile(filePath, content);
    count++;
    if (content !== originalLength) {
      process.stdout.write('.');
    }
  }

  console.log(`\n✅ 已处理 ${count} 个Markdown文件`);
}

fixAllSpecialTags().catch(console.error);
