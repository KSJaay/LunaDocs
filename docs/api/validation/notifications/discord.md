---
aside: false
---

# Discord Notification Schema

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
    "textMessage": {
      "type": "string",
      "required": false
    },
    "token": {
      "type": "string",
      "pattern": "/^https://(?:discord.com|discordapp.com)/api/webhooks/[0-9]+/[0-9a-zA-Z_.-]+$/",
      "required": true
    },
    "username": {
      "type": "string",
      "minLength": 1,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z0-9_]{1,32}$/",
      "required": false
    }
  }
}
```
