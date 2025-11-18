---
aside: false

title: Lunalytics Auth API
description: API documentation for authentication endpoints in Lunalytics, the application monitoring and status page platform.
keywords:
  [
    Lunalytics,
    authentication,
    API,
    user login,
    user registration,
    application monitoring,
    status page,
    uptime monitoring,
    downtime notifications,
    incident alerts,
    open source,
    monitoring tool,
  ]
---

# Auth Endpoints

Authentication endpoints are used to authenticate users, manage user accounts, and manage sessions. These endpoints do not require a session cookie or API key (unless otherwise specified).

## Register User

### <Badge type="post" text="POST" /> /auth/register

Create a new user account with the provided username, email, and password. An optional invite code can be included to register via an invitation instead of needing approval. This endpoint will set a session cookie upon successful registration.

### Payload Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

### Query Parameters

| Parameter | Type      | Description |
| --------- | --------- | ----------- |
| invite    | `?string` | Invite code |

## Sign In User

### <Badge type="post" text="POST" /> /auth/login

Sign in a user with the provided email and password. This endpoint will set a session cookie upon successful authentication.

### Payload Body

```json
{
  "email": "string",
  "password": "string"
}
```

## Logout User

### <Badge type="tip" text="GET" /> /auth/logout

Logs out the currently authenticated user by clearing the session cookie.

## Setup Lunalytics

### <Badge type="post" text="POST" /> /auth/setup

Initializes the Lunalytics application with the provided configuration details. This endpoint is typically used during the initial setup of the application and the provided user details will be registered as the owner of the application.

### Payload Body

```json
{
  "type": "basic",
  "username": "string",
  "email": "string",
  "password": "string",
  "databaseType": "string",
  "databaseName": "string",
  "websiteUrl": "string",
  "migrationType": "string",
  "retentionPeriod": "string"
}
```

## Setup Exists

### <Badge type="tip" text="GET" /> /auth/setup/exists

Checks if the Lunalytics application has already been set up. Returns an object indicating whether the setup has been completed.

## Config

### <Badge type="tip" text="GET" /> /auth/config

Retrieves the current authentication configuration settings for the Lunalytics application.

## Update Config

### <Badge type="post" text="POST" /> /auth/config/update

Updates the authentication configuration settings for the Lunalytics application. This endpoint allows modifying settings such as enabling or disabling native sign-in and user registration.

### Payload Body

```json
{
  "nativeSignin": "boolean",
  "register": "boolean"
}
```
