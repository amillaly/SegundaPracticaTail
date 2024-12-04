// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Patrones de diseño de comportamiento',
  
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
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
        docs: {
          sidebarPath: undefined, // Barra lateral deshabilitada
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo1.svg',
        },
        items: [
          
          { to: '/docs/chaing', label: 'Page 1', position: 'left' },
          { to: '/docs/command', label: 'Page 2', position: 'left' },
          { to: '/docs/page3', label: 'Page 3', position: 'left' },
          { to: '/docs/page4', label: 'Page 4', position: 'left' },
          { to: '/docs/page5', label: 'Page 5', position: 'left' },
          { to: '/docs/page6', label: 'Page 6', position: 'left' },
          { to: '/docs/page7', label: 'Page 7', position: 'left' },
          { to: '/docs/page8', label: 'Page 8', position: 'left' },
          { to: '/docs/page9', label: 'Page 9', position: 'left' },
          { to: '/docs/page10', label: 'Page 10', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            title: 'Community',
            items: [
              {
                label: 'Pagina Institucional',
                href: 'https://utsh.edu.mx',
              },
              {
                label: 'SIGE',
                href: 'http://sige.utsh.edu.mx',
              },
              
            ],
          },
          
        ],
        copyright: ` ${new Date().getFullYear()} Universidad Tecnológica de la Sierra HIdalguense.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;