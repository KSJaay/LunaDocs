import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import openApiSidebar from './docs/openapi/sidebar';

const sidebars: SidebarsConfig = {
  guidesSidebar: [
    'guides/intro',
    'guides/getting-started',
    'guides/configuration',
    {
      type: 'category',
      label: 'Contributing',
      items: [
        // 'guides/contributing/overview',
        // 'guides/contributing/conduct',
        // 'guides/contributing/issues',
        'guides/contributing/pull-request',
        'guides/contributing/testing',
      ],
    },
    {
      type: 'category',
      label: 'Internals',
      items: [
        // 'guides/internals/overview',
        'guides/internals/changelog',
        // 'guides/internals/notifications',
        'guides/internals/permissions',
        'guides/internals/custom-icons',
        'guides/internals/config',
        // 'guides/internals/components',
        // 'guides/internals/flows',
      ],
    },
    {
      type: 'category',
      label: 'Notifications',
      items: [
        // 'guides/notifications/notifications-index',
        'guides/notifications/discord/create-discord-webhook',
        'guides/notifications/slack/create-slack-webhook',
        'guides/notifications/telegram/create-telegram-bot',
        // 'guides/notifications/telegram/find-telegram-chat-id',
        // 'guides/notifications/webhook/webhook-index',
      ],
    },
  ],
  apiSidebar: [
    'api/api-introduction',
    'api/api-authorization',
    // 'api/api-reference',
    ...(Array.isArray(openApiSidebar) ? openApiSidebar : [openApiSidebar]),
    {
      type: 'category',
      label: 'Validation',
      items: [
        'api/validation/validation-auth',
        'api/validation/validation-config',
        'api/validation/validation-incident',
        'api/validation/validation-monitor',
        'api/validation/validation-provider',
        'api/validation/validation-setup',
        'api/validation/validation-token',
        'api/validation/validation-user',
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'api/validation/notifications/validation-notifications-discord',
            'api/validation/notifications/validation-notifications-home-assistant',
            'api/validation/notifications/validation-notifications-pushover',
            'api/validation/notifications/validation-notifications-slack',
            'api/validation/notifications/validation-notifications-telegram',
            'api/validation/notifications/validation-notifications-webhook',
          ],
        },
        {
          type: 'category',
          label: 'Status',
          items: [
            'api/validation/status/validation-status-layout',
            'api/validation/status/validation-status-settings',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
