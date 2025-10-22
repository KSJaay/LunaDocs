---
aside: false
---

# Pushover Notification Schema

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
      "required": true
    },
    "data": {
      "type": "object",
      "properties": {
        "userKey": {
          "type": "string",
          "required": true
        },
        "ttl": {
          "type": "integer",
          "pattern": "/^d+$/",
          "required": true
        },
        "priority": {
          "type": "integer",
          "minimum": -2,
          "maximum": 2,
          "required": true
        },
        "device": {
          "type": "string",
          "required": false
        }
      }
    }
  }
}
```
