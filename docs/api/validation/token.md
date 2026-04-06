---
id: validation-token
slug: /api/validation/token
title: Token Endpoints
---

# Token Endpoints

```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "required": true
    },
    "name": {
      "type": "string",
      "required": false
    },
    "permission": {
      "type": "integer",
      "required": true
    },
    "isEdit": {
      "type": "boolean",
      "required": false
    }
  }
}
```
