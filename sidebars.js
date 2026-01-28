module.exports = {
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

  standardsSidebar: [
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
            'standards/semi/semi-chapter-001',
            'standards/semi/semi-chapter-002',
            'standards/semi/semi-chapter-003',
            'standards/semi/semi-chapter-004',
            'standards/semi/semi-chapter-005',
            'standards/semi/semi-chapter-006',
            'standards/semi/semi-chapter-007',
            'standards/semi/semi-chapter-008',
            'standards/semi/semi-chapter-009',
            'standards/semi/semi-chapter-010',
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
  ],
};
