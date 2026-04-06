import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'Lunalytics',
  tagline: 'Documentation for Lunalytics',
  favicon: 'img/icon-192x192.png',
  future: {
    v4: true,
  },
  url: 'https://docs.lunalytics.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
          editUrl:
            'https://github.com/KSJaay/LunalyticsDocs/edit/main/docs/:path',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/KSJaay/LunalyticsDocs/edit/main/blog/:path',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'lunalytics',
        docsPluginId: 'classic',
        config: {
          lunalytics: {
            specPath: 'openapi.json',
            outputDir: 'docs/openapi',
            sidebarOptions: {
              groupPathsBy: 'tag',
              sidebarCollapsible: true,
              sidebarCollapsed: true,
            },
            showInfoPage: false,
            showSchemas: true,
            externalJsonProps: false,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Lunalytics',
      logo: {
        alt: 'Lunalytics Logo',
        src: '/icon-192x192.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'api/api-introduction',
          label: 'API',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'guides/intro',
          label: 'Guides',
          position: 'left',
        },
        {
          href: 'https://github.com/KSJaay/Lunalytics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/guides/getting-started' },
            { label: 'API Reference', to: '/docs/api/reference' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/KSJaay/Lunalytics' },
          ],
        },
      ],
      copyright:
        'Copyright © 2024 - present <a href="https://github.com/KSJaay">KSJaay</a>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    themes: ['docusaurus-theme-openapi-docs'],
  } satisfies Preset.ThemeConfig,
};

export default config;
