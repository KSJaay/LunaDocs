---
aside: false
---

# Webhook Notification Schema

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
      "pattern": "/^(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})+$/",
      "required": true
    },
    "data": {
      "type": "object",
      "properties": {
        "additionalHeaders": {
          "type": "object",
          "required": false
        },
        "showAdditionalHeaders": {
          "type": "boolean",
          "required": false
        },
        "requestType": {
          "type": "string",
          "enum": ["application/json", "form-data"],
          "required": false
        }
      }
    }
  }
}
```
