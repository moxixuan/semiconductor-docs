const fs = require('fs');
const ids = ['029', '032', '058', '060', '061', '066', '067', '068', '069', '073', '074', '075', '112', '120', '131', '158'];

for (const id of ids) {
  try {
    fs.unlinkSync(`docs/standards/semi/semi-chapter-${id}.md`);
    console.log(`✅ Deleted ${id}`);
  } catch (e) {
    // File doesn't exist or already deleted
  }
}

const files = fs.readdirSync('docs/standards/semi').filter(f => f.endsWith('.md'));
console.log(`\n剩余: ${files.length} 个文件`);
