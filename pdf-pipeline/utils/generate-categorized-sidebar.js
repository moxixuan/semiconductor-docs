const fs = require('fs').promises;
const path = require('path');

// SEMI标准系列分类说明
const seriesDescriptions = {
  'E': '设备自动化 (Equipment Automation)',
  'F': '设施 (Facilities)',
  'G': '气体 (Gases)',
  'M': '材料 (Materials)',
  'P': '光掩模 (Photomask)',
  'T': '追溯性 (Traceability)',
  'S': '安全 (Safety)',
  'D': '文档 (Documentation)',
  'C': '其他 (Others)'
};

async function generateCategorizedSidebar() {
  // 读取章节数据
  const chapters = JSON.parse(
    await fs.readFile('./docs/standards/semi-sidebar.json', 'utf-8')
  );

  console.log(`📊 分析 ${chapters.length} 个章节...\n`);

  // 按系列分组
  const seriesGroups = {};

  for (const ch of chapters) {
    // 从标题中提取标准系列（如 E1, F37, T13 等）
    const match = ch.title.match(/^([A-Z])(\d+)/);
    if (match) {
      const series = match[1];
      const standardNumber = match[0]; // 完整的标准号如 E1, F37

      if (!seriesGroups[series]) {
        seriesGroups[series] = [];
      }

      seriesGroups[series].push({
        ...ch,
        standardNumber
      });
    }
  }

  // 生成侧边栏内容
  let sidebarItems = [];

  // 按系列字母顺序排列
  const sortedSeries = Object.keys(seriesGroups).sort();

  for (const series of sortedSeries) {
    const items = seriesGroups[series];

    // 按标准号排序
    items.sort((a, b) => {
      const numA = parseInt(a.standardNumber.substring(1));
      const numB = parseInt(b.standardNumber.substring(1));
      return numA - numB;
    });

    const categoryItem = `        {
          type: 'category',
          label: '${series}系列 - ${seriesDescriptions[series] || series}',
          collapsible: true,
          collapsed: true,
          items: [
${items.map(ch => `            '${ch.docId}'`).join(',\n')}
          ],
        }`;

    sidebarItems.push(categoryItem);
  }

  // 更新 sidebars.js
  const sidebarsPath = './sidebars.js';
  let sidebarsContent = await fs.readFile(sidebarsPath, 'utf-8');

  // 替换SEMI标准合集部分
  const regex = /(?:{[\s\S]*?label: 'SEMI标准合集（前10章）'[\s\S]*?items: \[)([\s\S]*?)(\s*\]\s*},)/;

  const newSection = `$1
${sidebarItems.join(',\n')}
$2`;

  if (!regex.test(sidebarsContent)) {
    console.error('❌ 无法找到SEMI标准合集部分');
    return;
  }

  sidebarsContent = sidebarsContent.replace(regex, newSection);

  await fs.writeFile(sidebarsPath, sidebarsContent);

  console.log('✅ 已更新 sidebars.js');
  console.log('\n📊 系列统计:');
  for (const series of sortedSeries) {
    const count = seriesGroups[series].length;
    const desc = seriesDescriptions[series] || series;
    console.log(`  ${series}系列 (${desc}): ${count} 个标准`);
  }
  console.log(`\n📚 总计: ${chapters.length} 个SEMI标准已分类并添加到侧边栏\n`);
}

generateCategorizedSidebar().catch(console.error);
