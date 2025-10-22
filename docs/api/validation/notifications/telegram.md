---
aside: false
---

# Telegram Notification Schema

```json
{
  "type": "object",
  "properties": {
    "messageType": {
      "type": "string",
      "enum": ["basic", "pretty", "nerdy"],
      "required": true
    },
    "friendlyName": {
      "type": "string",
      "pattern": "/^[a-zA-Z0-9_-]+$/",
      "required": true
    },
    "token": {
      "type": "string",
      "pattern": "/^[0-9]+:[a-zA-Z0-9_-]{1,35}$/",
      "required": true
    },
    "data": {
      "type": "object",
      "properties": {
        "chatId": {
          "type": "string",
          "pattern": "/^-?[0-9]+$/",
          "required": false
        },
        "disableNotification": {
          "type": "boolean",
          "required": false
        },
        "protectContent": {
          "type": "boolean",
          "required": false
        },
        "username": {
          "type": "string",
          "required": false
        }
      }
    }
  }
}
```
