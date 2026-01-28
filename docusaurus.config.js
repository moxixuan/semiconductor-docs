const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: '半导体知识文档库',
  tagline: '专业的半导体技术文档检索平台',

  url: 'https://moxixuan.github.io',
  baseUrl: '/semiconductor-docs/',

  organizationName: 'moxixuan',
  projectName: 'semiconductor-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/your-org/semiconductor-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/your-org/semiconductor-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '⚡ 半导体知识库',
        style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'icDesignSidebar',
            position: 'left',
            label: '芯片设计',
          },
          {
            type: 'docSidebar',
            sidebarId: 'processSidebar',
            position: 'left',
            label: '工艺制造',
          },
          {
            type: 'docSidebar',
            sidebarId: 'edaToolsSidebar',
            position: 'left',
            label: 'EDA工具',
          },
          {
            type: 'docSidebar',
            sidebarId: 'standardsSidebar',
            position: 'left',
            label: '协议标准',
          },
          {to: '/blog', label: '技术博客', position: 'left'},
          {
            href: 'https://github.com/your-org/semiconductor-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {label: '芯片设计', to: '/docs/ic-design/intro'},
              {label: '工艺制造', to: '/docs/process/intro'},
              {label: 'EDA工具', to: '/docs/eda-tools/intro'},
              {label: '协议标准', to: '/docs/standards/intro'},
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/semiconductor-docs',
              },
              {
                label: '技术博客',
                to: '/blog',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '更新日志',
                to: '/blog',
              },
              {
                html: `
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    <span style="margin-right: 8px;">AI 集成</span>
                    <span style="background: linear-gradient(135deg, #00d4ff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">NEW</span>
                  </a>
                `,
              },
            ],
          },
        ],
        copyright: `
          <div style="text-align: center;">
            <p style="margin: 0; opacity: 0.8;">Copyright © 2025 半导体知识文档库</p>
            <p style="margin: 8px 0 0 0; opacity: 0.6; font-size: 0.9em;">
              Built with <span style="color: #00d4ff;">❤</span> using Docusaurus •
              <span style="background: linear-gradient(135deg, #00d4ff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">AI-Powered</span>
            </p>
          </div>
        `,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['verilog', 'python', 'bash', 'java', 'javascript', 'typescript'],
      },
    }),
};

module.exports = config;
