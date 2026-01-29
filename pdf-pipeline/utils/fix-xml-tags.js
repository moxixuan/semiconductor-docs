const fs = require('fs').promises;
const path = require('path');

async function fixXMLTags() {
  const markdownDir = './docs/standards/semi';
  const files = await fs.readdir(markdownDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.md') || file === 'semi-sidebar.json') continue;

    const filePath = path.join(markdownDir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    const originalLength = content.length;

    // 1. Remove XML declarations: <?xml version="1.0"...?>
    content = content.replace(/<\?xml[^?]*\?>\s*/g, '');

    // 2. Escape all XML tags that aren't common HTML
    // These patterns are from SEMI standards showing XML/Schema examples
    // They should be in code blocks or escaped, not interpreted as JSX

    // Pattern: <xs:...>, </xs:...>, <soap:...>, xmlns:xs:, xmlns:soap:, etc.
    // Replace with escaped versions or remove angle brackets

    // Remove angle brackets from namespaced XML tags (common in XSD, SOAP, WSDL)
    content = content.replace(/<\/?([a-z]+):[^>]*>/gi, (match) => {
      // Remove the angle brackets but keep the content
      return match.replace(/</g, '').replace(/>/g, '');
    });

    // Handle xmlns: attributes inside tags
    content = content.replace(/xmlns:[a-z]+=/gi, 'xmlns=');

    // 3. Remove remaining problematic patterns
    // <xs:documentation> content
    content = content.replace(/<\/?xs:[^>]*>/gi, '');

    // 4. Clean up any remaining template literal patterns with backticks
    content = content.replace(/\{`([^`]*)`\}/g, '{$1}');
    content = content.replace(/`/g, '');

    await fs.writeFile(filePath, content);
    count++;
    if (content.length !== originalLength) {
      process.stdout.write('.');
    }
  }

  console.log(`\n✅ 已修复 ${count} 个Markdown文件`);
}

fixXMLTags().catch(console.error);
