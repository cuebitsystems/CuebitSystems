// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cuebit Systems Docs',
  tagline: 'Documentation for DocketFlow, Wattline, Resona, and Kayeli',
  favicon: 'img/favicon.png',

  // CHANGE THIS to your real GitHub Pages URL / custom domain before deploying
  url: 'https://docs.cuebitlabs.com',
  baseUrl: '/',

  organizationName: 'your-org', // GitHub org/user name — update this
  projectName: 'cuebitsystems-docs', // repo name — update this (company docs repo, covers all 4 products)
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // we define docs plugins per-product below instead
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docketflow',
        path: 'docketflow-docs',
        routeBasePath: 'docketflow',
        sidebarPath: require.resolve('./sidebars-docketflow.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wattline',
        path: 'wattline-docs',
        routeBasePath: 'wattline',
        sidebarPath: require.resolve('./sidebars-wattline.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resona',
        path: 'resona-docs',
        routeBasePath: 'resona',
        sidebarPath: require.resolve('./sidebars-resona.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kayeli',
        path: 'kayeli-docs',
        routeBasePath: 'kayeli',
        sidebarPath: require.resolve('./sidebars-kayeli.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Cuebit Systems',
        logo: {
          alt: 'Cuebit Systems Logo',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            to: '/docketflow/',
            label: 'DocketFlow',
            position: 'left',
            activeBaseRegex: `/docketflow/`,
          },
          {
            to: '/wattline/',
            label: 'Wattline',
            position: 'left',
            activeBaseRegex: `/wattline/`,
          },
          {
            to: '/resona/',
            label: 'Resona',
            position: 'left',
            activeBaseRegex: `/resona/`,
          },
          {
            to: '/kayeli/',
            label: 'Kayeli',
            position: 'left',
            activeBaseRegex: `/kayeli/`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Cuebit Systems.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
