const fs = require('fs').promises;
const path = require('path');

/**
 * 从Markdown文件中提取标题
 */
async function extractTitles(markdownDir) {
  const files = await fs.readdir(markdownDir);
  const chapters = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(markdownDir, file);
    const content = await fs.readFile(filePath, 'utf-8');

    // 提取章节号
    const chapterNum = file.match(/semi-chapter-(\d+)\.md/)[1];

    // 提取标题（优先级：sidebar_label > title > 第一个h1）
    let title = null;

    // 尝试从frontmatter提取sidebar_label
    const sidebarLabelMatch = content.match(/sidebar_label:\s*["']([^"']+)["']/);
    if (sidebarLabelMatch) {
      title = sidebarLabelMatch[1];
    }

    // 如果没有sidebar_label，尝试提取title
    if (!title || title === 'Chapter 1') {
      const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
      if (titleMatch) {
        title = titleMatch[1];
      }
    }

    // 如果还是没有，提取第一个h1标题
    if (!title || title === 'Chapter 1' || title === '文档标题') {
      const h1Match = content.match(/^#\s+(.+)$/m);
      if (h1Match && h1Match[1] !== '文档标题') {
        title = h1Match[1];
        // 限制标题长度
        if (title.length > 50) {
          title = title.substring(0, 47) + '...';
        }
      }
    }

    // 最终回退
    if (!title) {
      title = `Chapter ${chapterNum}`;
    }

    chapters.push({
      id: chapterNum,
      docId: `standards/semi/${file.replace('.md', '')}`,
      title: title,
    });
  }

  // 按章节号排序
  chapters.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return chapters;
}

/**
 * 生成sidebars配置
 */
async function generateSidebars() {
  const markdownDir = './docs/standards/semi';
  const outputFile = './docs/standards/semi-sidebar.json';

  console.log('📊 提取章节标题...\n');
  const chapters = await extractTitles(markdownDir);

  console.log(`✅ 提取了 ${chapters.length} 个章节标题\n`);

  // 显示前10个和最后3个
  console.log('前10个章节:');
  chapters.slice(0, 10).forEach(ch => {
    console.log(`  ${ch.id}: ${ch.title}`);
  });

  console.log('\n最后3个章节:');
  chapters.slice(-3).forEach(ch => {
    console.log(`  ${ch.id}: ${ch.title}`);
  });

  // 生成sidebars条目
  const sidebarItems = chapters.map(ch => `'${ch.docId}'`);

  // 保存到文件
  await fs.writeFile(outputFile, JSON.stringify(chapters, null, 2));

  console.log(`\n✅ 已保存到: ${outputFile}`);

  // 生成sidebars.js代码片段
  console.log('\n📝 Sidebars配置代码:\n');
  console.log('```javascript');
  console.log('  {');
  console.log('    type: "category",');
  console.log('    label: "SEMI标准合集",');
  console.log('    collapsible: true,');
  console.log('    collapsed: true,');
  console.log('    items: [');
  console.log(...sidebarItems.slice(0, 5).map(s => `      ${s},`));
  console.log('      ...');
  console.log(`      // 共${chapters.length}章`);
  console.log('    ],');
  console.log('  }');
  console.log('```');

  return chapters;
}

// 执行
generateSidebars().catch(console.error);
