const fs = require('fs').promises;

// 17个复杂章节列表
const complexChapters = [
  '029', '032', '058', '060', '061', '066', '067', '068', '069',
  '073', '074', '075', '112', '120', '131', '132', '158'
];

/**
 * 修复Markdown文件中的JSX语法问题 - 改进版
 */
async function fixChapterMarkdown(chapterId) {
  const sourceFile = `./data/markdown/split/semi-chapter-${chapterId}.md`;
  const targetFile = `./docs/standards/semi/semi-chapter-${chapterId}.md`;

  console.log(`  📝 处理 Chapter ${chapterId}...`);

  let content = await fs.readFile(sourceFile, 'utf-8');

  // 分离内容：frontmatter + import + JSX组件 + 正文
  const parts = content.split(/---/);

  if (parts.length < 3) {
    console.log(`  ⚠️  Chapter ${chapterId} 格式异常`);
    return;
  }

  // parts[0] = 空
  // parts[1] = frontmatter
  // parts[2] = import + JSX + 正文

  const frontmatter = `---${parts[1]}---`;
  let body = parts.slice(2).join('---');

  // 只处理正文内容（在PdfDownloadCard之后）
  const bodyParts = body.split(/(<PdfDownloadCard[\s\S]*?\/>)/);

  if (bodyParts.length < 3) {
    // 没有PdfDownloadCard，处理整个body
    body = await fixBodyContent(body);
  } else {
    // 保持frontmatter和JSX组件不变，只处理正文
    const header = bodyParts.slice(0, 2).join('');
    const mainContent = bodyParts.slice(2).join('');
    body = header + await fixBodyContent(mainContent);
  }

  content = frontmatter + '\n' + body;

  // 更新PDF链接路径
  content = content.replace(/pdfLink="\/pdfs\/split\//g, 'pdfLink="/pdfs/semi/');
  content = content.replace(/pdfLink='\/pdfs\/split\//g, "pdfLink='/pdfs/semi/");

  await fs.writeFile(targetFile, content);
  console.log(`  ✅ Chapter ${chapterId} 已修复`);
}

/**
 * 修复正文内容
 */
async function fixBodyContent(content) {
  // 1. 移除所有反引号
  content = content.replace(/`/g, '');

  // 2. 移除XML声明
  content = content.replace(/<\?xml[^?]*\?>\s*/g, '');

  // 3. 移除所有XML/HTML标签（除了常见的HTML标签）
  const htmlTags = new Set([
    'p', 'div', 'span', 'strong', 'em', 'b', 'i', 'u', 'a', 'img',
    'ul', 'ol', 'li', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre', 'blockquote',
    'MDXLayout', 'PdfDownloadCard', 'import'
  ]);

  // 移除非HTML标签的尖括号
  content = content.replace(/<\/?([A-Za-z][A-Za-z0-9_\-\.]*)(\s[^>]*)?>/g, (match, tagName) => {
    if (htmlTags.has(tagName.toLowerCase())) {
      return match; // 保留HTML/JSX标签
    }
    // 移除尖括号
    return match.replace(/</g, '').replace(/>/g, ' ');
  });

  // 4. 处理CDATA
  content = content.replace(/<!\[CDATA\[[^\]]*\]\]>/g, 'CDATA');

  // 5. 清理多余空行
  content = content.replace(/\n{3,}/g, '\n\n');

  return content;
}

/**
 * 处理所有复杂章节
 */
async function processComplexChapters() {
  console.log(`🔧 开始处理 ${complexChapters.length} 个复杂章节...\n`);

  const results = [];

  for (const chapterId of complexChapters) {
    try {
      await fixChapterMarkdown(chapterId);
      results.push({ chapterId, success: true });
    } catch (error) {
      console.error(`  ❌ Chapter ${chapterId} 处理失败: ${error.message}`);
      results.push({ chapterId, success: false, error: error.message });
    }
  }

  console.log(`\n📊 处理完成:`);
  console.log(`  ✅ 成功: ${results.filter(r => r.success).length}`);
  console.log(`  ❌ 失败: ${results.filter(r => !r.success).length}`);

  return results;
}

// 执行
processComplexChapters()
  .then(() => console.log('\n✅ 所有复杂章节处理完成'))
  .catch(console.error);
