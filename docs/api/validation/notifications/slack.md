---
aside: false
---

# Slack Notification Schema

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
      "pattern": "/^https://hooks.slack.com/services/[0-9a-zA-Z]+/[0-9a-zA-Z]+/[0-9a-zA-Z]+$/",
      "required": true
    },
    "data": {
      "type": "object",
      "properties": {
        "channel": {
          "type": "string",
          "pattern": "/^[a-z0-9][a-z0-9_-]{0,79}$/",
          "required": false
        },
        "username": {
          "type": "string",
          "pattern": "/^[a-zA-Z0-9_]{1,32}$/",
          "required": false
        },
        "textMessage": {
          "type": "string",
          "required": false
        }
      }
    }
  }
}
```
