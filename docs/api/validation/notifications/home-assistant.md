---
aside: false
---

# Home Assistant Notification Schema

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
      "pattern": "/^.+$/",
      "required": true
    },
    "data": {
      "type": "object",
      "properties": {
        "homeAssistantUrl": {
          "type": "string",
          "pattern": "/^.+$/",
          "required": true
        },
        "homeAssistantNotificationService": {
          "type": "string",
          "pattern": "/^.+$/",
          "required": true
        }
      }
    }
  }
}
```
