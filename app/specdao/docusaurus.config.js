// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: section,
      path: `docs/${section}`,
      routeBasePath: section,
      include: ['**/*.md', '**/*.mdx'],
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/fluent-qa/frontend',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('solidity-start'),
  defineSection('solidity-advanced'),
  defineSection('ether-start'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SpecBiz@Web3',
  tagline: '面向好奇者的Web3开源学院\n',
  url: 'specbiz-web3.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'specbiz@web3', // Usually your GitHub org/user name.
  projectName: 'specbiz-web3.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    ...SECTIONS,
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'solidity-start',
    //     path: 'docs/solidity',
    //     routeBasePath: 'solidity',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     breadcrumbs: false,
    //     editUrl: 'https://github.com/WTFAcademy/frontend',
    //     // ……其他选项
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'ether',
    //     path: 'docs/ether',
    //     routeBasePath: 'ether',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     breadcrumbs: false,
    //     editUrl: 'https://github.com/WTFAcademy/frontend',
    //     // ……其他选项
    //   },
    // ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'WTF Logo',
          src: 'img/wtflogo.png',
        },
        items: [
          {
            href: '/learning-center',
            label: '学习中心',
            position: 'left',
          },
          {
            href: '/learning-center',
            label: '学习中心1',
            position: 'left',
          },
          {
            href: '/solidity-start/',
            position: 'left',
            label: '智能合约入门',
          },
          {
            href: '/solidity-start/',
            position: 'left',
            label: 'Web3前后端开发入门',
          },
          // {
          //   href: 'https://github.com/AmazingAng/WTFSolidity/discussions',
          //   label: '论坛',
          //   position: 'left',
          // },
          {
            type: 'custom-profile',
            position: 'right'
          }
        ],
      },
      footer: {
        logo: {
          src: 'img/wtflogo.png',
          height: '36px',
        },
        links: [
          {
            title: '产品',
            items: [
              {
                label: '学习中心',
                to: '/learning-center',
              },
              {
                label: '课程',
                to: '/learning-center',
              },
              {
                label: '论坛',
                href: 'https://github.com/AmazingAng/WTFSolidity/discussions',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/WTFAcademy',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5akcruXrsk',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xAA_Science',
              },
              {
                label: '微信群',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform',
              },
            ],
          },
          {
            title: '捐款',
            items: [
              {
                label: 'Gitcoin',
                href: 'https://gitcoin.co/grants/6090/wtf-solidity',
              },
              {
                label: 'Mirror',
                href: 'https://mirror.xyz/ninjak.eth/collection',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} WTF Academy.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"]
      },
    }),
};

module.exports = config;
