---
aside: false
---

# Auth Endpoints

Auth endpoints are used for user authentication and management. Below are the JSON validation schemas for the request bodies of various auth-related endpoints.

```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "minLength": 2,
      "maxLength": 254,
      "pattern": "/^[^\s@]+@[^\s@]+\.[^\s@]{2,254}$/",
      "required": true
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 48,
      "pattern": "/^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*~_\-+=]).{8,48}$/",
      "required": true
    },
    "username": {
      "type": "string",
      "minLength": 3,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z0-9_\- ]{3,32}$/",
      "required": true
    }
}
```
