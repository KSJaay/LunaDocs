---
aside: false
---

# User Endpoints

User endpoints allow you to interact with user data within the application. These endpoints require authentication via a valid `session_token` cookie or an API Token in the `Authorization` header.

## User Object

### User structure

| Field       | Type    | Description                                                                                     |
| ----------- | ------- | ----------------------------------------------------------------------------------------------- |
| email       | string  | The users's email address                                                                       |
| displayName | string  | Username of the user                                                                            |
| avatar      | string  | User's avatar url                                                                               |
| isVerified  | boolean | If the user has been verified to accesss the application                                        |
| permission  | number  | Bitflags for the [permissions](guides/internals/permissions.md) the user has to the application |
| createdAt   | date    | Date of when the user was created                                                               |
| isOwner     | boolean | If the user is the owner of the application                                                     |
| sso         | boolean | If the user registered using Single Sign-On (SSO)                                               |

### Example User

```json
{
  "email": "KSJaay@lunalytics.xyz",
  "displayName": "KSJaay",
  "avatar": "https://lunalytics.xyz/icons/Panda.png",
  "isVerified": true,
  "permission": 1,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "isOwner": true,
  "sso": false
}
```

# API Endpoints

## Get current user

### <Badge type="tip" text="GET" /> /api/user

Returns the current [user](#user-structure) attached to the session token or API token.

## Check user exists

### <Badge type="post" text="POST" /> /api/user/exists

Returns a boolean stating whether the user exists in the database.

## Get user monitors

### <Badge type="tip" text="GET" /> /api/user/monitors

Returns an array of the monitors the user has access to.

## Update user display name

### <Badge type="post" text="POST" /> /api/user/update/username

Update the username for the current logged in user.

### Payload

```json
{
  "displayName": "Not KSJaay"
}
```

## Update user password

### <Badge type="post" text="POST" /> /api/user/update/password

Update the password for the current logged in user.

### Payload

```json
{
  "currentPassword": "ReallyOldPassword123",
  "newPassword": "ReallySecurePassword123"
}
```

## Update user avatar

### <Badge type="post" text="POST" /> /api/user/update/avatar

Update the avatar for the current logged in user.

### Payload

```json
{
  "avatar": "https://lunalytics.xyz/icons/Gerbil.png"
}
```

## Get team members

### <Badge type="tip" text="GET" /> /api/user/team

Returns an array of [team members](#user-structure).

## Decline member

### <Badge type="post" text="POST" /> /api/user/access/decline

Decline the request from a member wanting to join the team.

### Payload

```json
{
  "email": "KSJaay@lunalytics.xyz"
}
```

## Approve member

### <Badge type="post" text="POST" /> /api/user/access/approve

Approve the request from a member wanting to join the team.

### Payload

```json
{
  "email": "KSJaay@lunalytics.xyz"
}
```

## Remove Member

### <Badge type="post" text="POST" /> /api/user/access/remove

Remove the user from the team.

### Payload

```json
{
  "email": "KSJaay@lunalytics.xyz"
}
```

## Update User Permissions

### <Badge type="post" text="POST" /> /api/user/permission/update

Update the permission of a user. Only a user with `MANAGE_USERS` permission can access this endpoint and can not give permissions higher than their own.

### Payload

```json
{
  "email": "KSJaay@lunalytics.xyz",
  "permission": 2
}
```

## Transfer Ownership

### <Badge type="post" text="POST" /> /api/user/transfer/ownership

Transfer the ownership of to another user. Only the owner can access this endpoint, and the owners permissions will be updated to an admin. This action is irreversible.

### Payload

```json
{
  "email": "KSJaay@lunalytics.xyz"
}
```

## Delete Account

### <Badge type="post" text="POST" /> /api/user/delete/account

Delete the current users account. If the current user is an owner, they must transfer ownership before deleting their account.
