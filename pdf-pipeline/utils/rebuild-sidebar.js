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

async function rebuildSidebar() {
  // 读取章节数据
  const chapters = JSON.parse(
    await fs.readFile('./docs/standards/semi-sidebar.json', 'utf-8')
  );

  console.log(`📊 分析 ${chapters.length} 个章节...\n`);

  // 按系列分组
  const seriesGroups = {};

  for (const ch of chapters) {
    const match = ch.title.match(/^([A-Z])(\d+)/);
    if (match) {
      const series = match[1];
      const standardNumber = match[0];

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

  // 生成SEMI标准合集的categories
  const semiCategories = [];

  for (const series of sortedSeries) {
    const items = seriesGroups[series];

    // 按标准号排序
    items.sort((a, b) => {
      const numA = parseInt(a.standardNumber.substring(1));
      const numB = parseInt(b.standardNumber.substring(1));
      return numA - numB;
    });

    const itemLines = items.map(ch => `            '${ch.docId}'`).join(',\n');

    semiCategories.push(`        {
          type: 'category',
          label: '${series}系列 - ${seriesDescriptions[series] || series}',
          collapsible: true,
          collapsed: true,
          items: [
${itemLines}
          ],
        }`);
  }

  // 完整的 standardsSidebar 部分
  const standardsSidebar = `  standardsSidebar: [
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

  // 完整的 sidebars.js 内容
  const fullSidebar = `module.exports = {
  icDesignSidebar: [
    {
      type: 'category',
      label: '芯片设计',
      collapsible: true,
      collapsed: false,
      items: [
        'ic-design/intro',
        {
          type: 'category',
          label: '数字电路设计',
          collapsible: true,
          collapsed: false,
          items: [
            'ic-design/digital/design-rules',
            'ic-design/digital/timing-analysis',
            'ip-core/overview',
          ],
        },
      ],
    },
  ],

  processSidebar: [
    {
      type: 'category',
      label: '工艺与制造',
      collapsible: true,
      collapsed: false,
      items: [
        'process/intro',
        {
          type: 'category',
          label: '工艺技术节点',
          collapsible: true,
          collapsed: true,
          items: [
            'process/nodes/7nm-5nm',
            'process/nodes/finfet',
          ],
        },
        {
          type: 'category',
          label: '封装测试',
          collapsible: true,
          collapsed: true,
          items: [
            'process/packaging/sip',
          ],
        },
      ],
    },
  ],

  edaToolsSidebar: [
    {
      type: 'category',
      label: 'EDA工具',
      collapsible: true,
      collapsed: false,
      items: [
        'eda-tools/intro',
        {
          type: 'category',
          label: 'Cadence工具',
          collapsible: true,
          collapsed: true,
          items: [
            'eda-tools/cadence/virtuoso',
          ],
        },
        {
          type: 'category',
          label: 'Synopsys工具',
          collapsible: true,
          collapsed: true,
          items: [
            'eda-tools/synopsys/design-compiler',
            'eda-tools/synopsys/primetime',
          ],
        },
        {
          type: 'category',
          label: '开源工具',
          collapsible: true,
          collapsed: true,
          items: [
            'eda-tools/opensource/openroad',
          ],
        },
      ],
    },
  ],

${standardsSidebar}
};
`;

  await fs.writeFile('./sidebars.js', fullSidebar);

  console.log('✅ 已重新生成 sidebars.js');
  console.log('\n📊 系列统计:');
  for (const series of sortedSeries) {
    const count = seriesGroups[series].length;
    const desc = seriesDescriptions[series] || series;
    console.log(`  ${series}系列 (${desc}): ${count} 个标准`);
  }
  console.log(`\n📚 总计: ${chapters.length} 个SEMI标准已分类并添加到侧边栏\n`);
}

rebuildSidebar().catch(console.error);
