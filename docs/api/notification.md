---
aside: false
---

# Notification Endpoints

Notification endpoints are used to manage notifications for monitors. Notifications can be sent via various platforms such as Discord, Slack, Telegram, Webhooks, Home Assistant, etc... These endpoints require the user to have `MANAGE_NOTIFICATIONS` and `VIEW_NOTIFICATIONS` permissions. To view notifications, the user must have `VIEW_NOTIFICATIONS` permission.

## Notification Object

### Notification Structure

| Field        | Type    | Description                                                               |
| ------------ | ------- | ------------------------------------------------------------------------- |
| id           | string  | Unique id for the monitor                                                 |
| platform     | string  | One of the following: Discord, Slack, Telegram, Webhooks                  |
| messageType  | string  | One of the following: basic, pretty, nerdy                                |
| token        | string  | Token/url for the platform                                                |
| email        | string  | Email address for the user who created the monitor                        |
| isEnabled    | boolean | Boolean if the notification is enabled                                    |
| content      | string  | Additional content for the notification                                   |
| friendlyName | string  | Friendly name for the notification                                        |
| data         | object  | Object containing information about the notification (Varies by platform) |
| createdAt    | date    | Timestamp of when the notification was created                            |

### Example Notification

::: code-group

```json [Discord]
{
  "id": "d8a53324-6c1b-410c-be0e-c17a99d862e6",
  "platform": "Discord",
  "messageType": "basic",
  "token": "https://discord.com/api/webhooks/XXXXXXXXX/XXXXXXXXXXXXXXX",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true,
  "content": "@everyone Ping! Alert from Lunalytics!",
  "friendlyName": "Lunalytics",
  "data": {},
  "createdAt": "2024-11-03 12:00:00"
}
```

```json [Slack]
{
  "id": "d8a53324-6c1b-410c-be0e-c17a99d862e6",
  "platform": "Slack",
  "messageType": "nerdy",
  "token": "https://hooks.slack.com/services/XXXXXXX/XXXXXXXXXXX/X43XxxxXX2XxxxXX",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true,
  "content": null,
  "friendlyName": "Lunalytics",
  "data": { "channel": "#general", "username": "Lunalytics" },
  "createdAt": "2024-11-03 12:00:00"
}
```

```json [Telegram]
{
  "id": "d8a53324-6c1b-410c-be0e-c17a99d862e6",
  "platform": "Telegram",
  "messageType": "pretty",
  "token": "",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true,
  "content": "",
  "friendlyName": "Lunalytics",
  "data": {},
  "createdAt": "2024-11-03 12:00:00"
}
```

```json [Webhooks]
{
  "id": "d8a53324-6c1b-410c-be0e-c17a99d862e6",
  "platform": "Webhook",
  "messageType": "nerdy",
  "token": "https://lunalytics.xyz/api/webhook/alert",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true,
  "content": null,
  "friendlyName": "Lunalytics",
  "data": { "requestType": "form-data" },
  "createdAt": "2024-11-03 12:00:00"
}
```

```json [HomeAssistant]
{
  "id": "d8a53324-6c1b-410c-be0e-c17a99d862e6",
  "platform": "HomeAssistant",
  "messageType": "pretty",
  "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true,
  "content": null,
  "friendlyName": "Lunalytics",
  "data": {
    "homeAssistantUrl": "https://home-assistant.local:8123",
    "homeAssistantNotificationService": "mobile_app_my_device"
  },
  "createdAt": "2024-11-03 12:00:00"
}
```

:::

## Get all notifications

### <Badge type="tip" text="GET" /> /api/notifications

Returns an array of [notifications](#notification-structure).

## Get a specific notification

### <Badge type="tip" text="GET" /> /api/notifications/id

Returns a [notification](#notification-structure) for the given id.

### Query Parameters

| Parameter      | Type     | Description                                         |
| -------------- | -------- | --------------------------------------------------- |
| notificationId | `string` | Notification id for the notification to be fetched. |

## Create a new notification

### <Badge type="post" text="POST" /> /api/notifications/create

Create a new [notification](#notification-structure) and returns the notification object.

### Payload

::: code-group

```json [Discord]
{
  "platform": "Disord",
  "messageType": "pretty",
  "friendlyName": "Lunalytics",
  "textMessage": "Ping @everyone",
  "token": "https://discord.com/api/webhook/xxxxxxxxxx/xxxxxxx",
  "username": "Lunalytics"
}
```

```json [Slack]
{
  "platform": "Slack",
  "channel": "XXXXXXXXXXXX",
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "textMessage": "Ping @here",
  "token": "https://hooks.slack.com/services/xxxxxxxxx/xxxxxx/xxxxx",
  "username": "Lunalytics"
}
```

```json [Telegram]
{
  "platform": "Telegram",
  "chatId": "xxxxxxxxxx",
  "disableNotification": false,
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "protectContent": false,
  "token": "xxxxxxxxxxxxxxx"
}
```

```json [Webhook]
{
  "platform": "Webhook",
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "requestType": "application/json",
  "showAdditionalHeaders": true,
  "additionalHeaders": {},
  "token": "https://lunalytics.xyz/api/webhook/alert"
}
```

```json [HomeAssistant]
{
  "platform": "HomeAssistant",
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "data": {
    "homeAssistantUrl": "https://home-assistant.local:8123",
    "homeAssistantNotificationService": "mobile_app_my_device"
  }
}
```

:::

## Edit a notification

### <Badge type="post" text="POST" /> /api/notifications/edit

Edit an existing [notification](#notification-structure) and returns the notification object.

### Payload

::: code-group

```json [Discord]
{
  "messageType": "pretty",
  "friendlyName": "Lunalytics",
  "textMessage": "Ping @everyone",
  "token": "https://discord.com/api/webhook/xxxxxxxxxx/xxxxxxx",
  "username": "Lunalytics",
  "id": "4d048471-9e85-428b-8050-4238f6033478",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true
}
```

```json [Slack]
{
  "channel": "XXXXXXXXXXXX",
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "textMessage": "Ping @here",
  "token": "https://hooks.slack.com/services/xxxxxxxxx/xxxxxx/xxxxx",
  "username": "Lunalytics",
  "id": "4d048471-9e85-428b-8050-4238f6033478",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true
}
```

```json [Telegram]
{
  "chatId": "xxxxxxxxxx",
  "disableNotification": false,
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "protectContent": false,
  "token": "xxxxxxxxxxxxxxx",
  "id": "4d048471-9e85-428b-8050-4238f6033478",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true
}
```

```json [Webhook]
{
  "friendlyName": "Lunalytics",
  "messageType": "pretty",
  "requestType": "application/json",
  "showAdditionalHeaders": true,
  "additionalHeaders": {},
  "token": "https://lunalytics.xyz/api/webhook/alert",
  "id": "4d048471-9e85-428b-8050-4238f6033478",
  "email": "KSJaay@lunalytics.xyz",
  "isEnabled": true
}
```

## Delete a specific notification

### <Badge type="tip" text="GET" /> /api/notifications/delete

Deletes the notification using the given notificationId.

### Query Parameters

| Parameter      | Type     | Description                                         |
| -------------- | -------- | --------------------------------------------------- |
| notificationId | `string` | Notification id for the notification to be deleted. |

## Toggle a specific notification

### <Badge type="tip" text="GET" /> /api/notifications/toggle

Toggle the notification using the given notificationId and isEnabled query parameter.

### Query Parameters

| Parameter      | Type      | Description                                             |
| -------------- | --------- | ------------------------------------------------------- |
| notificationId | `string`  | Notification id for the notification to be toggled.     |
| isEnabled      | `boolean` | Whether the notification should be enabled or disabled. |
