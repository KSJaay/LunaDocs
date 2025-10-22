---
aside: false
---

# User Endpoints

```json
{
  "type": "object",
  "properties": {
    "displayName": {
      "type": "string",
      "minLength": 3,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z0-9_- ]{3,32}$/",
      "required": true
    }
  }
}
```
