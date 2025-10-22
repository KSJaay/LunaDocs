---
aside: false
---

# Invite Endpoints

Invitation endpoints are used to manage user invitations. Invitations can be used to verify members without manual approval. These endpoints require the `CREATE_INVITE` permission.

## Invite Object

### Invite structure

| Field      | Type    | Description                                                             |
| ---------- | ------- | ----------------------------------------------------------------------- |
| email      | string  | Email address who created the token                                     |
| token      | string  | Unique token for the invite                                             |
| permission | number  | [Permissions](/guides/internals/permissions) bitflags given to the user |
| paused     | boolean | Whether the invite is paused or not                                     |
| createdAt  | date    | Date of when the invite was created                                     |
| expiresAt  | date    | Date of when the invite expires                                         |
| limit      | integer | Number of times the invite can be used                                  |
| uses       | integer | Number of times the invite has been used                                |

### Example Invite

```json
{
  "email": "ksjaay@gmail.com",
  "token": "fZ4sPyWy",
  "permission": 170,
  "paused": false,
  "createdAt": "2025-08-17T17:24:00.364Z",
  "expiresAt": null,
  "limit": null,
  "uses": 0
}
```

## Get all Invites

### <Badge type="tip" text="GET" /> /invite/all

Returns a list of all invites created.

## Create Invite

### <Badge type="post" text="POST" /> /invite/create

Create a new invite with specified parameters. Valid BitFlags for permissions can be found in the [permissions documentation](/guides/internals/permissions). Values for expiry should be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If no expiry is provided, the invite will not expire. If no limit is provided, the invite can be used unlimited times.

### Payload Body

```json
{
  "expiry"?: "string",
  "limit"?: "integer",
  "permission": "integer"
}
```

## Pause Invite

### <Badge type="post" text="POST" /> /invite/pause

Pause or unpause an existing invite.

### Payload Body

```json
{
  "id": "string",
  "paused": "boolean"
}
```

## Delete Invite

### <Badge type="post" text="POST" /> /invite/delete

Delete an existing invite.

### Payload Body

```json
{
  "id": "string"
}
```
