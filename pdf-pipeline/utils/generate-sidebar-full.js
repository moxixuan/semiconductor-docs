const fs = require('fs').promises;

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

async function generateFullSidebar() {
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

  // 按系列字母顺序排列
  const sortedSeries = Object.keys(seriesGroups).sort();

  // 生成SEMI标准合集部分
  const semiCategories = [];

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

    semiCategories.push(categoryItem);
  }

  // 读取原始 sidebars.js
  let sidebarsContent = await fs.readFile('./sidebars.js', 'utf-8');

  // 找到 standardsSidebar 部分
  const standardsSection = `  standardsSidebar: [
    {
      type: 'category',
      label: '协议与标准',
      collapsible: true,
      collapsed: false,
      items: [
        'standards/intro',
        'standards/secs-e5',
        {
          type: 'category',
          label: 'SEMI标准合集',
          collapsible: true,
          collapsed: true,
          items: [
${semiCategories.join(',\n')}
          ],
        },
        {
          type: 'category',
          label: '总线协议',
          collapsible: true,
          collapsed: true,
          items: [
            'standards/bus/amba-axi',
            'standards/bus/i2c-spi',
          ],
        },
        {
          type: 'category',
          label: '存储协议',
          collapsible: true,
          collapsed: true,
          items: [
            'standards/memory/ddr4-ddr5',
          ],
        },
      ],
    },
  ],`;

  // 替换 standardsSidebar 部分
  sidebarsContent = sidebarsContent.replace(
    /  standardsSidebar: \[[\s\S]*?\],/,
    standardsSection
  );

  await fs.writeFile('./sidebars.js', sidebarsContent);

  console.log('✅ 已更新 sidebars.js');
  console.log('\n📊 系列统计:');
  for (const series of sortedSeries) {
    const count = seriesGroups[series].length;
    const desc = seriesDescriptions[series] || series;
    console.log(`  ${series}系列 (${desc}): ${count} 个标准`);
  }
  console.log(`\n📚 总计: ${chapters.length} 个SEMI标准已分类并添加到侧边栏\n`);
}

generateFullSidebar().catch(console.error);
