# Status Layout Validation Schema

Validation schemas for the different layout components of the status page.

## Header

```json
{
  "type": "object",
  "properties": {
    "header": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "header",
          "required": true
        },
        "title": {
          "type": "object",
          "required": true,
          "properties": {
            "showLogo": {
              "type": "boolean"
            },
            "showTitle": {
              "type": "boolean"
            },
            "logoSize": {
              "type": "string",
              "enum": ["XS", "S", "M", "L", "XL"],
              "required": true
            },
            "titleSize": {
              "type": "string",
              "enum": ["XS", "S", "M", "L", "XL"],
              "required": true
            },
            "rotation": {
              "type": "string",
              "enum": ["Horizontal", "Vertical"],
              "required": true
            },
            "alignment": {
              "type": "string",
              "enum": ["Left", "Center", "Right"],
              "required": true
            },
            "position": {
              "type": "string",
              "enum": ["Left", "Center", "Right"],
              "required": true
            }
          }
        },
        "status": {
          "type": "object",
          "required": true,
          "properties": {
            "showTitle": { "type": "boolean" },
            "showStatus": { "type": "boolean" },
            "titleSize": {
              "type": "string",
              "enum": ["XS", "S", "M", "L", "XL"],
              "required": true
            },
            "statusSize": {
              "type": "string",
              "enum": ["XS", "S", "M", "L", "XL"],
              "required": true
            },
            "alignment": {
              "type": "string",
              "enum": ["Left", "Center", "Right"],
              "required": true
            },
            "position": {
              "type": "string",
              "enum": ["Left", "Center", "Right"],
              "required": true
            }
          }
        }
      }
    }
  }
}
```

## Status

```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "status",
          "required": true
        },
        "icon": {
          "type": "boolean",
          "required": true
        },
        "design": {
          "type": "string",
          "enum": ["Simple", "Outline", "Solid"],
          "required": true
        },
        "size": {
          "type": "string",
          "enum": ["XS", "S", "M", "L", "XL"],
          "required": true
        },
        "titleSize": {
          "type": "string",
          "enum": ["XS", "S", "M", "L", "XL"],
          "required": true
        },
        "status": {
          "type": "string",
          "enum": ["Operational", "Maintenance", "Incident", "Outage"],
          "required": true
        }
      }
    }
  }
}
```

## Incidents

```json
{
  "type": "object",
  "properties": {
    "incidents": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "incidents",
          "required": true
        },
        "design": {
          "type": "string",
          "enum": ["Minimal", "Simple", "Pretty"],
          "required": true
        },
        "size": {
          "type": "string",
          "enum": ["XS", "S", "M", "L", "XL"],
          "required": true
        },
        "titleSize": {
          "type": "string",
          "enum": ["XS", "S", "M", "L", "XL"],
          "required": true
        },
        "status": {
          "type": "string",
          "enum": ["Operational", "Maintenance", "Incident", "Outage"],
          "required": true
        }
      }
    }
  }
}
```

## Uptime

```json
{
  "type": "object",
  "properties": {
    "uptime": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "uptime",
          "required": true
        },
        "title": {
          "type": "string",
          "pattern": "/^[a-zA-Z0-9_ -]{0,64}$/",
          "required": true
        },
        "monitors": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1,
          "required": true
        },
        "autoAdd": {
          "type": "boolean",
          "required": true
        },
        "graphType": {
          "type": "string",
          "enum": ["Basic", "Pretty", "Nerdy"],
          "required": true
        },
        "statusIndicator": {
          "type": "string",
          "enum": ["Icon", "Text"],
          "required": true
        },
        "status": {
          "type": "string",
          "enum": ["Operational", "Maintenance", "Incident", "Outage"],
          "required": true
        }
      }
    }
  }
}
```

## Metrics

```json
{
  "type": "object",
  "properties": {
    "metrics": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "metrics",
          "required": true
        },
        "title": {
          "type": "string",
          "pattern": "/^[a-zA-Z0-9_ -]{0,64}$/",
          "required": true
        },
        "autoAdd": {
          "type": "boolean",
          "required": true
        },
        "graphType": {
          "type": "string",
          "enum": ["Separate", "Dropdown"],
          "required": true
        },
        "data": {
          "type": "object",
          "required": true,
          "properties": {
            "showName": {
              "type": "boolean",
              "required": true
            },
            "showPing": {
              "type": "boolean",
              "required": true
            }
          }
        },
        "monitors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "required": true
              },
              "title": {
                "type": "string",
                "pattern": "/^[a-zA-Z0-9_ -]{0,64}$/",
                "required": true
              },
              "graphType": {
                "type": "string",
                "enum": ["Basic", "Pretty", "Nerdy"],
                "required": true
              },
              "showPing": {
                "type": "boolean",
                "required": true
              }
            }
          },
          "minItems": 1,
          "required": true
        }
      }
    }
  }
}
```

## History

```json
{
  "type": "object",
  "properties": {
    "history": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "history",
          "required": true
        }
      }
    }
  }
}
```

## Custom HTML

```json
{
  "type": "object",
  "properties": {
    "customHTML": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "customHTML",
          "required": true
        },
        "content": {
          "type": "string",
          "minLength": 1,
          "required": true
        }
      }
    }
  }
}
```

## Custom CSS

```json
{
  "type": "object",
  "properties": {
    "customCSS": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "required": true
        },
        "type": {
          "type": "string",
          "value": "customCSS",
          "required": true
        },
        "content": {
          "type": "string",
          "minLength": 1,
          "required": true
        }
      }
    }
  }
}
```
