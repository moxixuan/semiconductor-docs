const fs = require('fs').promises;
const path = require('path');

/**
 * 智能提取SEMI章节标题
 */
async function extractSEMITitles(markdownDir) {
  const files = await fs.readdir(markdownDir);
  const chapters = [];

  for (const file of files.sort()) {
    if (!file.endsWith('.md') || file === 'semi-sidebar.json') continue;

    const filePath = path.join(markdownDir, file);
    const content = await fs.readFile(filePath, 'utf-8');

    // 提取章节号
    const chapterNum = file.match(/semi-chapter-(\d+)\.md/)[1];

    // 查找所有SEMI标准标题（格式：SEMI XX-xxxx ...）
    const semiMatches = content.match(/SEMI [A-Z]\d+[\-–][\dA-Z]+[^\n]*/g);
    const firstStandard = semiMatches ? semiMatches[0].replace(/SEMI /, '') : null;

    // 如果找到SEMI标准，使用第一个标准作为标题
    let title = '';
    if (firstStandard) {
      // 提取标准号和简短描述
      const lines = firstStandard.split(/\s+/);
      const standardNum = lines[0];
      const description = lines.slice(1, 5).join(' '); // 取前几个词

      title = `${standardNum} - ${description.substring(0, 30)}...`;

      // 清理标题
      title = title.replace(/\s+/g, ' ');
      if (title.length > 60) {
        title = title.substring(0, 57) + '...';
      }
    } else {
      title = `SEMI Standards - Chapter ${chapterNum}`;
    }

    chapters.push({
      id: chapterNum.padStart(3, '0'),
      docId: `standards/semi/${file.replace('.md', '')}`,
      title: title,
    });
  }

  return chapters;
}

/**
 * 生成sidebars并更新配置
 */
async function generateAndApplySidebars() {
  const markdownDir = './docs/standards/semi';

  console.log('📊 分析SEMI章节内容...\n');
  const chapters = await extractSEMITitles(markdownDir);

  console.log(`✅ 已分析 ${chapters.length} 个章节\n`);

  // 显示前5个和最后3个
  console.log('前5个章节:');
  chapters.slice(0, 5).forEach((ch, i) => {
    console.log(`  ${i + 1}. ${ch.title}`);
  });

  console.log('\n最后3个章节:');
  chapters.slice(-3).forEach((ch, i) => {
    console.log(`  ${chapters.length - 2 + i}. ${ch.title}`);
  });

  // 保存到JSON文件
  await fs.writeFile(
    './docs/standards/semi-sidebar.json',
    JSON.stringify(chapters, null, 2)
  );

  console.log(`\n✅ 已保存标题信息`);

  // 生成sidebars条目数组
  const sidebarItems = chapters.map(ch => `      '${ch.docId}'`).join(',\n');

  // 读取当前sidebars.js
  const sidebarsPath = './sidebars.js';
  let sidebarsContent = await fs.readFile(sidebarsPath, 'utf-8');

  // 替换SEMI合集部分
  const regex = /(?:{[\s\S]*?label: "SEMI标准合集"[\s\S]*?items: \[)([\s\S]*?)(\s*\]\s*},)/;

  const newSection = `$1
${sidebarItems}
$2`;

  sidebarsContent = sidebarsContent.replace(regex, newSection);

  await fs.writeFile(sidebarsPath, sidebarsContent);

  console.log('✅ 已更新 sidebars.js');
  console.log(`\n📊 统计: 共${chapters.length}个SEMI章节已添加到侧边栏\n`);

  return chapters;
}

// 执行
generateAndApplySidebars().catch(console.error);
