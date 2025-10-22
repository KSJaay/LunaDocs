---
aside: false
---

# Monitor Endpoints

Monitor endpoints currently accept 6 different types of services to monitor. Depending on the type different validation rules may apply. Below are the validation schemas for each type.

::: code-group

```json [Docker]
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": "Lunalytics",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "url": {
      "type": "string",
      "required": true
    },
    "interval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": false
    },
    "monitorId": {
      "type": "string",
      "required": "Only for editing an existing monitor"
    },
    "retry": {
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 30,
      "required": true
    },
    "retryInterval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "requestTimeout": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "notificationId": {
      "type": "string",
      "required": false
    },
    "notificationType": {
      "type": "string",
      "enum": ["All", "Outage", "Recovery"],
      "required": "Only if \"notificationId\" is provided"
    },
    "icon": {
      "type": "object",
      "required": false,
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "url": {
          "type": "string",
          "required": true
        }
      }
    }
  }
}
```

```json [HTTP]
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": "Lunalytics",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "url": {
      "type": "string",
      "required": true
    },
    "interval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": false
    },
    "monitorId": {
      "type": "string",
      "required": "Only for editing an existing monitor"
    },
    "retry": {
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 30,
      "required": true
    },
    "retryInterval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "requestTimeout": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "notificationId": {
      "type": "string",
      "required": false
    },
    "notificationType": {
      "type": "string",
      "enum": ["All", "Outage", "Recovery"],
      "required": "Only if \"notificationId\" is provided"
    },
    "ignoreTls": {
      "type": "boolean",
      "required": false
    },
    "icon": {
      "type": "object",
      "required": false,
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "url": {
          "type": "string",
          "required": true
        }
      }
    },
    "method": {
      "type": "string",
      "enum": ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
      "default": "GET",
      "required": false
    },
    "valid_status_codes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": [],
      "required": true
    },
    "headers": {
      "type": "object",
      "default": {},
      "required": false
    },
    "body": {
      "type": "object",
      "default": {},
      "required": false
    }
  }
}
```

```json [JSON]
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": "Lunalytics",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "url": {
      "type": "string",
      "required": true
    },
    "interval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": false
    },
    "monitorId": {
      "type": "string",
      "required": "Only for editing an existing monitor"
    },
    "retry": {
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 30,
      "required": true
    },
    "retryInterval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "requestTimeout": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "notificationId": {
      "type": "string",
      "required": false
    },
    "notificationType": {
      "type": "string",
      "enum": ["All", "Outage", "Recovery"],
      "required": "Only if \"notificationId\" is provided"
    },
    "ignoreTls": {
      "type": "boolean",
      "required": false
    },
    "icon": {
      "type": "object",
      "required": false,
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "url": {
          "type": "string",
          "required": true
        }
      }
    },
    "method": {
      "type": "string",
      "enum": ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
      "default": "GET",
      "required": false
    },
    "headers": {
      "type": "object",
      "default": {},
      "required": false
    },
    "body": {
      "type": "object",
      "default": {},
      "required": false
    },
    "json_query": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": { "type": "string", "required": true },
          "operator": {
            "type": "string",
            "enum": [
              "==",
              "!=",
              "<",
              "<=",
              ">",
              ">=",
              "contains",
              "not_contains"
            ],
            "required": true
          },
          "value": { "type": "string", "required": true }
        }
      },
      "default": [{ "key": "", "operator": "==", "value": "" }],
      "required": false
    }
  }
}
```

```json [Ping]
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": "Lunalytics",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "url": {
      "type": "string",
      "required": true
    },
    "interval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": false
    },
    "monitorId": {
      "type": "string",
      "required": "Only for editing an existing monitor"
    },
    "retry": {
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 30,
      "required": true
    },
    "retryInterval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "requestTimeout": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "notificationId": {
      "type": "string",
      "required": false
    },
    "notificationType": {
      "type": "string",
      "enum": ["All", "Outage", "Recovery"],
      "required": "Only if \"notificationId\" is provided"
    },
    "icon": {
      "type": "object",
      "required": false,
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "url": {
          "type": "string",
          "required": true
        }
      }
    }
  }
}
```

```json [Push]
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": "Lunalytics",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "url": {
      "type": "string",
      "required": true
    },
    "interval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": false
    },
    "monitorId": {
      "type": "string",
      "required": "Only for editing an existing monitor"
    },
    "retry": {
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 30,
      "required": true
    },
    "retryInterval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "requestTimeout": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "notificationId": {
      "type": "string",
      "required": false
    },
    "notificationType": {
      "type": "string",
      "enum": ["All", "Outage", "Recovery"],
      "required": "Only if \"notificationId\" is provided"
    },
    "icon": {
      "type": "object",
      "required": false,
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "url": {
          "type": "string",
          "required": true
        }
      }
    }
  }
}
```

```json [TCP]
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": "Lunalytics",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "url": {
      "type": "string",
      "required": true
    },
    "interval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": false
    },
    "monitorId": {
      "type": "string",
      "required": "Only for editing an existing monitor"
    },
    "retry": {
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 30,
      "required": true
    },
    "retryInterval": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "requestTimeout": {
      "type": "integer",
      "default": 60,
      "minimum": 20,
      "maximum": 600,
      "required": true
    },
    "notificationId": {
      "type": "string",
      "required": false
    },
    "notificationType": {
      "type": "string",
      "enum": ["All", "Outage", "Recovery"],
      "required": "Only if \"notificationId\" is provided"
    },
    "icon": {
      "type": "object",
      "required": false,
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "url": {
          "type": "string",
          "required": true
        }
      }
    }
  }
}
```

:::
