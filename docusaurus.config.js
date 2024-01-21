// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'degzrobotics',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.degzrobotics.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'degzrobotics', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
  },


  plugins: [
    require.resolve("docusaurus-plugin-image-zoom")

  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["tr", "en"],
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: "/",
      })
    ],
    '@saucelabs/theme-github-codeblock'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/degzrobotics/wiki/tree/main/',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'hourly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Degz Robotics Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'https://degzrobotics.com/komponentler/',
            label: 'Mağaza',
            position: 'left',
            className: 'navbar__icon navbar__shop',
          },
          {
            to: 'https://forum.degzrobotics.com/',
            label: 'Forum',
            position: 'left',
            className: 'navbar__icon navbar__forum',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            position: 'right',
            href: 'https://github.com/degzrobotics/wiki/',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          }

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dökümanlar',
            items: [

            ],
          },
          {
            title: 'Topluluk',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.degzrobotics.com',
              },
              {
                label: 'Mucif',
                href: 'https://www.mucif.com',
              },
            ],
          },
          {
            title: 'Daha Fazla',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} wiki.degzrobotics.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          },
          margin: 10,
          scrollOffset: 200,

        }
      }

    }),
};

export default config;

