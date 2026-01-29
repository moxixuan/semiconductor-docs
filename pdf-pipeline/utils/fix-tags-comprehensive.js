const fs = require('fs').promises;
const path = require('path');

async function fixAllTags() {
  const markdownDir = './docs/standards/semi';
  const files = await fs.readdir(markdownDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.md') || file === 'semi-sidebar.json') continue;

    const filePath = path.join(markdownDir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    const originalLength = content;

    // 1. Remove all backticks first (from template literals)
    content = content.replace(/`/g, '');

    // 2. Remove XML declarations
    content = content.replace(/<\?xml[^?]*\?>\s*/g, '');

    // 3. Handle all XML-like tags that aren't valid HTML/JSX
    // Pattern: <TagName> or <TagName attr="value"> or <TagName ...>
    // We want to remove angle brackets from tags that aren't common HTML/JSX

    // Common HTML/JSX tags whitelist
    const htmlTags = new Set([
      'div', 'span', 'p', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'strong', 'b', 'em', 'i', 'u', 'a', 'img', 'ul', 'ol', 'li',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre',
      'blockquote', 'dl', 'dt', 'dd', 'figure', 'figcaption', 'input',
      'MDXLayout', 'PdfDownloadCard', 'import', 'parentName', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
    ]);

    // Fix opening tags with attributes: <TagName attr="value">
    content = content.replace(/<([A-Za-z][A-Za-z0-9_]*)(\s+[^>]*)?>/g, (match, tagName, attrs) => {
      const lowerTag = tagName.toLowerCase();
      if (htmlTags.has(lowerTag)) {
        return match; // Keep HTML/JSX tags
      }
      // Remove angle brackets, keep the tag name and attributes
      return attrs ? `${tagName}${attrs}` : tagName;
    });

    // Fix closing tags: </TagName>
    content = content.replace(/<\/([A-Za-z][A-Za-z0-9_]*)>/g, (match, tagName) => {
      const lowerTag = tagName.toLowerCase();
      if (htmlTags.has(lowerTag)) {
        return match; // Keep HTML/JSX closing tags
      }
      return tagName; // Remove angle brackets
    });

    // 4. Handle self-closing tags: <TagName .../>
    content = content.replace(/<([A-Za-z][A-Za-z0-9_]*)(\s+[^>]*?)\/>/g, (match, tagName, attrs) => {
      const lowerTag = tagName.toLowerCase();
      if (htmlTags.has(lowerTag)) {
        return match; // Keep HTML/JSX self-closing tags
      }
      return `${tagName}${attrs}`; // Remove angle brackets and slash
    });

    // 5. Handle CDATA sections
    content = content.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, 'CDATA $1 CDATA');

    // 6. Handle namespace attributes like xmlns:xs=
    content = content.replace(/xmlns:[a-z]+=/gi, 'xmlns-');

    await fs.writeFile(filePath, content);
    count++;
    if (content !== originalLength) {
      process.stdout.write('.');
    }
  }

  console.log(`\n✅ 已处理 ${count} 个Markdown文件`);
}

fixAllTags().catch(console.error);
