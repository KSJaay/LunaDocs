---
aside: false
---

# Setup Endpoints

::: code-group

```json [SQLite]
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "minLength": 2,
      "maxLength": 254,
      "pattern": "/^[^s@]+@[^s@]+.[^s@]{2,254}$/",
      "required": true
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 48,
      "pattern": "/^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*~_-+=]).{8,48}$/",
      "required": true
    },
    "username": {
      "type": "string",
      "minLength": 3,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z0-9_- ]{3,32}$/",
      "required": true
    },
    "type": {
      "type": "string",
      "enum": ["basic", "advanced"],
      "required": true
    },
    "databaseType": {
      "type": "string",
      "enum": ["better-sqlite3", "pg"],
      "required": true
    },
    "databaseName": {
      "type": "string",
      "minLength": 3,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z]+$/",
      "required": true
    },
    "migrationType": {
      "type": "string",
      "enum": ["automatic", "manual"],
      "required": true
    }
  }
}
```

```json [PostgreSQL]
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "minLength": 2,
      "maxLength": 254,
      "pattern": "/^[^s@]+@[^s@]+.[^s@]{2,254}$/",
      "required": true
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 48,
      "pattern": "/^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*~_-+=]).{8,48}$/",
      "required": true
    },
    "username": {
      "type": "string",
      "minLength": 3,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z0-9_- ]{3,32}$/",
      "required": true
    },
    "type": {
      "type": "string",
      "enum": ["basic", "advanced"],
      "required": true
    },
    "databaseType": {
      "type": "string",
      "enum": ["better-sqlite3", "pg"],
      "required": true
    },
    "databaseName": {
      "type": "string",
      "minLength": 3,
      "maxLength": 32,
      "pattern": "/^[a-zA-Z]+$/",
      "required": true
    },
    "migrationType": {
      "type": "string",
      "enum": ["automatic", "manual"],
      "required": true
    },
    "postgresHost": {
      "type": "string",
      "required": true
    },
    "postgresPort": {
      "type": "string",
      "required": true
    },
    "postgresUser": {
      "type": "string",
      "minLength": 0,
      "maxLength": 62,
      "pattern": "/^[a-zA-Z_][a-zA-Z0-9_]{0,62}$/",
      "required": true
    },
    "postgresPassword": {
      "type": "string",
      "minLength": 8,
      "pattern": "/^[A-Za-zd@$!%*?&]{8,}$/",
      "required": true
    }
  }
}
```

:::
