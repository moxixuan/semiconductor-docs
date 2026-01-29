const fs = require('fs').promises;
const path = require('path');

async function fixContentTags() {
  const markdownDir = './docs/standards/semi';
  const files = await fs.readdir(markdownDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.md') || file === 'semi-sidebar.json') continue;

    const filePath = path.join(markdownDir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    const originalLength = content.length;

    // Split content into frontmatter + import section and body content
    // We only want to fix the body content, not the JSX components
    const parts = content.split(/(<PdfDownloadCard[\s\S]*?\/>)/);
    if (parts.length < 2) {
      // No PdfDownloadCard found, skip this file
      continue;
    }

    // Fix only the body content (after PdfDownloadCard)
    const bodyContent = parts.slice(2).join('');

    // 1. Remove all backticks (from template literals)
    let fixedBody = bodyContent.replace(/`/g, '');

    // 2. Escape angle brackets for common non-HTML tags in SEMI standards
    // These are data structure field names, BNF notation, etc.
    const problematicPatterns = [
      // SECS-II data items (uppercase tags with possible attributes)
      /<([A-Z][A-Za-z0-9_]*)>/g,
      // SECS-II closing tags
      /<\/([A-Z][A-Za-z0-9_]*)>/g,
      // XML namespace tags (except in code blocks which we'll handle separately)
      /<(?:xs|soap|wsdl):[^>]*>/gi,
      /<\/(?:xs|soap|wsdl):[^>]*>/gi,
      // XML declarations
      /<\?xml[^?]*\?>\s*/g,
    ];

    for (const pattern of problematicPatterns) {
      fixedBody = fixedBody.replace(pattern, (match) => {
        // Remove angle brackets but keep the content
        return match.replace(/</g, '').replace(/>/g, ' ').trim();
      });
    }

    // 3. Handle CDATA sections
    fixedBody = fixedBody.replace(/<!\[CDATA\[[^\]]*\]\]>/g, (match) => {
      return match.replace(/</g, ' < ').replace(/>/g, ' > ');
    });

    // 4. Handle namespace attributes like xmlns:xs=
    fixedBody = fixedBody.replace(/xmlns:[a-z]+=/gi, 'xmlns=');

    // Reassemble content
    content = parts.slice(0, 2).join('') + fixedBody;

    await fs.writeFile(filePath, content);
    count++;
    if (content.length !== originalLength) {
      process.stdout.write('.');
    }
  }

  console.log(`\n✅ 已检查 ${count} 个Markdown文件`);
}

fixContentTags().catch(console.error);
