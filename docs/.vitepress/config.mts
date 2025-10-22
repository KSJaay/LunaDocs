import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Lunalytics',
  base: '/docs/',
  description: 'Documentation for Lunalytics',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/docs/icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/docs/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/docs/icon-192x192.png' }],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/docs/icon-192x192.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    ['meta', { name: 'description', content: 'Documentation for Lunalytics' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://raw.githubusercontent.com/KSJaay/Lunalytics/main/public/logo.svg',
    nav: [
      { text: 'Home', link: 'https://lunalytics.xyz', target: '_self' },
      { text: 'Guides', link: '/guides/getting-started' },
      { text: 'API', link: '/api/introduction' },
    ],

    sidebar: {
      '/guides/': {
        base: '/guides/',
        items: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Getting Started', link: 'getting-started' },
              { text: 'Configuration', link: 'configuration' },
            ],
            collapsed: false,
          },
          {
            text: 'Internals',
            items: [
              // { text: 'Overview', link: 'internals/overview' },
              { text: 'Changelog', link: 'internals/changelog' },
              // { text: 'Flows', link: 'internals/flows' },
              { text: 'Notifications', link: 'internals/notifications' },
              { text: 'Permissions', link: 'internals/permissions' },
            ],
            collapsed: false,
          },
          {
            text: 'Contributing',
            items: [
              // { text: 'Overview', link: 'contributing/overview' },
              // { text: 'Code of Conduct', link: 'contributing/conduct' },
              { text: 'Pull request', link: 'contributing/pull-request' },
              { text: 'Testing', link: 'contributing/testing' },
              // { text: 'Issues', link: 'contributing/issues' },
            ],
            collapsed: false,
          },
        ],
      },
      '/api/': {
        base: '/api/',
        items: [
          { text: 'Introduction', link: 'introduction' },
          { text: 'Authorization', link: 'authorization' },
          { text: 'API Reference', link: 'reference' },
          {
            text: 'Endpoints',
            collapsed: false,
            items: [
              { text: 'Auth', link: 'auth' },
              // { text: 'Incidents', link: 'incidents' },
              { text: 'Invites', link: 'invites' },
              { text: 'Monitor', link: 'monitor' },
              { text: 'Notifications', link: 'notification' },
              // { text: 'Provider', link: 'provider' },
              // { text: 'Status', link: 'status' },
              // { text: 'Status Page', link: 'status-page' },
              // { text: 'Tokens', link: 'tokens' },
              { text: 'User', link: 'user' },
              // { text: 'Icons', link: 'icons' },
              // { text: 'Docker', link: 'docker' },
            ],
          },
          {
            text: 'Validation Schemas',
            collapsed: false,
            base: '/api/validation/',
            items: [
              { text: 'Auth', link: 'auth' },
              { text: 'Incident', link: 'incident' },
              { text: 'Monitor', link: 'monitor' },
              { text: 'Provider', link: 'provider' },
              { text: 'Setup', link: 'setup' },
              { text: 'Token', link: 'token' },
              { text: 'User', link: 'user' },
              {
                text: 'Status',
                base: '/api/validation/status/',
                items: [
                  { text: 'Layout', link: 'layout' },
                  { text: 'Settings', link: 'settings' },
                ],
                collapsed: true,
              },
              {
                text: 'Notifications',
                base: '/api/validation/notifications/',
                items: [
                  { text: 'Discord', link: 'discord' },
                  { text: 'Home Assistant', link: 'home-assistant' },
                  { text: 'Pushover', link: 'pushover' },
                  { text: 'Slack', link: 'slack' },
                  { text: 'Telegram', link: 'telegram' },
                  { text: 'Webhook', link: 'webhook' },
                ],
                collapsed: true,
              },
            ],
          },
        ],
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KSJaay/Lunalytics' },
    ],
    footer: {
      copyright:
        'Copyright © 2023 - present <a href="https://github.com/KSJaay">KSJaay</a>',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    editLink: {
      pattern: 'https://github.com/KSJaay/LunalyticDocs/edit/main/docs/:path',
    },
    search: {
      provider: 'local',
    },
  },
  lastUpdated: true,
});
