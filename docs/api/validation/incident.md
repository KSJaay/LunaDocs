---
aside: false
---

# Incident Endpoints

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "maxLength": 100,
      "required": true
    },
    "monitorIds": {
      "type": "array",
      "items": { "type": "string" },
      "required": true,
      "minItems": 1
    },
    "status": {
      "type": "string",
      "enum": ["Investigating", "Identified", "Monitoring", "Resolved"],
      "required": true
    },
    "affect": {
      "type": "string",
      "enum": ["Operational", "Incident", "Outage"],
      "required": true
    },
    "messages": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "message": {
            "type": "string",
            "maxLength": 1000,
            "required": true
          },
          "status": {
            "type": "string",
            "enum": ["Investigating", "Identified", "Monitoring", "Resolved"],
            "required": true
          },
          "monitorIds": {
            "type": "array",
            "items": { "type": "string" },
            "required": true,
            "minItems": 1
          }
        }
      },
      "required": true,
      "minItems": 1
    }
  }
}
```
