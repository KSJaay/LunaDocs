# Introduction to Lunalytics API

The Lunalytics API is currently based on the [REST architecture](https://en.wikipedia.org/wiki/REST). It currently accepts `application/json` for the request body and returns [JSON-encoded](https://www.json.org/json-en.html) responses, uses standard HTTP response codes, authentication, and verbs.

## Using API

The Base URL is going to be your domain followed by `/api`. Any requests to the API should be made with the appropriate HTTP method (GET, POST, PUT, DELETE) and include the necessary headers and body content.

Authorization with the Lunalytics API can be done in one of two ways:

1. **API tokens** can be generated in the Lunalytics dashboard under the "Settings" >"API Tokens" section, and should be included in the request headers.
2. **Cookie-based authentication** can be used by including a session cookie in the request headers.

For more information about [authorization](/api/authorization) please refer to the dedicated documentation page.

#### Base URL

```
https://{your-domain}/api
```

## Using SDK

The SDK is currently under development. Please refer to the [GitHub repository](https://github.com/ksjaay/luna.js) for updates.

## Documentation Structure

Documentation files for the endpoints are structured as follows:

- **Endpoint**: The URL path of the API endpoint.
- **Structure**: The structure of the request and response bodies, including any required fields and their types.
- **Response**: The expected response format, including success and error responses.
