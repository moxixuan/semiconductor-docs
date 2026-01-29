const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// 17个复杂章节列表
const complexChapters = [
  '029', '032', '058', '060', '061', '066', '067', '068', '069',
  '073', '074', '075', '112', '120', '131', '132', '158'
];

/**
 * 修复Markdown文件中的JSX语法问题
 */
async function fixChapterMarkdown(chapterId) {
  const sourceFile = `./data/markdown/split/semi-chapter-${chapterId}.md`;
  const targetFile = `./docs/standards/semi/semi-chapter-${chapterId}.md`;

  console.log(`  📝 处理 Chapter ${chapterId}...`);

  let content = await fs.readFile(sourceFile, 'utf-8');

  // 1. 移除所有反引号
  content = content.replace(/`/g, '');

  // 2. 将XML声明包裹在代码块中
  content = content.replace(/<\?xml[^?]*\?>/g, (match) => {
    return `\`\`\`xml\n${match}\n\`\`\``;
  });

  // 3. 将多行XML示例包裹在代码块中
  // 检测连续的XML标签行
  const lines = content.split('\n');
  const fixedLines = [];
  let inXmlBlock = false;
  let xmlBlockLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 检测是否是XML标签行
    const isXmlTag = /^(\s*<\/?[a-z][a-z0-9_\-\.]*)|(\s*<[a-z]+:)/i.test(line);

    if (isXmlTag) {
      if (!inXmlBlock) {
        inXmlBlock = true;
        xmlBlockLines = [];
      }
      xmlBlockLines.push(line);
    } else {
      if (inXmlBlock) {
        // XML块结束
        if (xmlBlockLines.length > 0) {
          fixedLines.push('```xml');
          fixedLines.push(...xmlBlockLines);
          fixedLines.push('```');
          xmlBlockLines = [];
        }
        inXmlBlock = false;
      }
      fixedLines.push(line);
    }
  }

  // 处理最后可能未闭合的XML块
  if (inXmlBlock && xmlBlockLines.length > 0) {
    fixedLines.push('```xml');
    fixedLines.push(...xmlBlockLines);
    fixedLines.push('```');
  }

  content = fixedLines.join('\n');

  // 4. 移除除HTML/JSX之外的所有尖括号标签
  const htmlTags = new Set([
    'p', 'div', 'span', 'strong', 'em', 'b', 'i', 'u', 'a', 'img',
    'ul', 'ol', 'li', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre', 'blockquote'
  ]);

  // 不在代码块中的标签处理
  content = content.replace(/(?<!```)[\s\S]*?(?=```|$)/g, (match) => {
    if (match.startsWith('```')) return match; // 跳过代码块

    // 移除非HTML标签
    return match.replace(/<\/?([A-Za-z][A-Za-z0-9_\-\.]*)(\s[^>]*)?>/g, (tagMatch, tagName) => {
      if (htmlTags.has(tagName.toLowerCase())) {
        return tagMatch; // 保留HTML标签
      }
      // 移除尖括号
      return tagMatch.replace(/</g, '').replace(/>/g, '');
    });
  });

  // 5. 清理多余的空行
  content = content.replace(/\n{3,}/g, '\n\n');

  // 6. 更新PDF链接路径
  content = content.replace(/pdfLink="\/pdfs\/split\//g, 'pdfLink="/pdfs/semi/');
  content = content.replace(/pdfLink='\/pdfs\/split\//g, "pdfLink='/pdfs/semi/");

  await fs.writeFile(targetFile, content);
  console.log(`  ✅ Chapter ${chapterId} 已修复`);
}

/**
 * 使用pdf2image提取PDF中的图表
 */
async function extractFiguresFromPDF(chapterId) {
  const pdfFile = `./data/pdfs/split/semi-chapter-${chapterId}.pdf`;
  const outputDir = `./static/images/semi/chapter-${chapterId}`;

  // 检查PDF文件是否存在
  try {
    await fs.access(pdfFile);
  } catch {
    console.log(`  ⚠️  PDF文件不存在: ${pdfFile}`);
    return [];
  }

  // 创建输出目录
  await fs.mkdir(outputDir, { recursive: true });

  console.log(`  📊 提取图表 Chapter ${chapterId}...`);

  try {
    // 使用pdftoppm提取图片
    const { stdout } = await execAsync(
      `pdftoppm -png -f 1 -l 50 -r 150 "${pdfFile}" "${outputDir}/page"`
    );

    // 列出生成的图片
    const files = await fs.readdir(outputDir);
    const images = files.filter(f => f.endsWith('.png')).sort();

    console.log(`  ✅ 提取了 ${images.length} 个图片`);
    return images.map(img => `/images/semi/chapter-${chapterId}/${img}`);
  } catch (error) {
    console.log(`  ⚠️  图片提取失败: ${error.message}`);
    return [];
  }
}

/**
 * 处理所有复杂章节
 */
async function processComplexChapters() {
  console.log(`🔧 开始处理 ${complexChapters.length} 个复杂章节...\n`);

  const results = [];

  for (const chapterId of complexChapters) {
    try {
      // 1. 修复Markdown
      await fixChapterMarkdown(chapterId);

      // 2. 提取图表（可选，如果需要）
      // const images = await extractFiguresFromPDF(chapterId);

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
