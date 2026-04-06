---
id: validation-provider
slug: /api/validation/provider
title: Provider Endpoints
---

# Provider Endpoints

```json
{
  "type": "object",
  "properties": {
    "clientId": {
      "type": "string",
      "required": true
    },
    "clientSecret": {
      "type": "string",
      "required": true
    },
    "provider": {
      "type": "string",
      "enum": ["discord", "github", "google", "slack", "twitch"],
      "required": true
    }
  }
}
```
