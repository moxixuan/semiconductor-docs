const fs = require('fs');

const chapters = ['029', '032', '058', '060', '061', '066', '067', '068', '069', '073', '074', '075', '112', '120', '131', '132', '158'];

for (const id of chapters) {
  const target = `./docs/standards/semi/semi-chapter-${id}.md`;

  try {
    let content = fs.readFileSync(target, 'utf-8');

    const parts = content.split(/---/);
    if (parts.length >= 3) {
      let frontmatter = parts[1];
      let body = parts.slice(2).join('---');

      // 清理frontmatter
      frontmatter = frontmatter.replace(/description:.*$/m, 'description: "SEMI标准文档"');
      frontmatter = frontmatter.replace(/title: ".*"$/m, `title: "Chapter ${id}"`);

      content = `---${frontmatter}---\n${body}`;
    }

    fs.writeFileSync(target, content);
    console.log(`✅ Chapter ${id}`);
  } catch (e) {
    console.log(`❌ Chapter ${id}: ${e.message}`);
  }
}
