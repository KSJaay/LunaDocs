---
aside: false
---

# Authorization

Currently users can authenticate in the API using either API tokens or session based cookies. We generally only recommend using session based cookies for testing in the browser or for quick scripts. For production use cases, we recommend using API tokens.

## API Tokens

Tokens need to be generated in the Lunalytics dashboard under `"Settings" > "API Tokens"` section. Once generated, you will need to include it in the request headers as follows:

```
authorization: YOUR_API_TOKEN
```

## Cookie-based Authorization

To authenticate using cookies, you will first need to log in to the Lunalytics dashboard. Once logged in, you can use the session cookies that are set in your browser to authenticate API requests. The only cookie that is required is the `session_token` cookie. This is valid for 30 days, after which you will need to log in again to obtain a new session token.
