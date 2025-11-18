---
title: Lunalytics Permissions Guide
description: Guide to understanding and managing user roles and permissions in Lunalytics, the open source application monitoring and status page platform.
keywords:
  [
    Lunalytics,
    permissions,
    roles,
    user management,
    access control,
    application monitoring,
    status page,
    uptime monitoring,
    downtime notifications,
    incident alerts,
    open source,
    monitoring tool,
    real-time monitoring,
    service health,
    public status page,
    alerting,
    self-hosted monitoring,
    SLA monitoring,
    service reliability,
    incident management,
  ]
---

# Permissions

Lunalytics uses a bitwise permission system to manage user roles and access levels. Each permission is represented by a unique bit in an integer, allowing for efficient storage and checking of multiple permissions. The permissions are defined as follows:

| Role                 | Value     | Description                                            |
| -------------------- | --------- | ------------------------------------------------------ |
| ADMINISTRATOR        | `1 << 0`  | Has all permissions                                    |
| VIEW_MONITORS        | `1 << 1`  | Permission to view monitors                            |
| MANAGE_MONITORS      | `1 << 2`  | Permission to create, delete, and update monitors      |
| VIEW_NOTIFICATIONS   | `1 << 3`  | Permission to view notifications                       |
| MANAGE_NOTIFICATIONS | `1 << 4`  | Permission to create, delete, and update notifications |
| VIEW_STATUS_PAGES    | `1 << 5`  | Permission to view status pages                        |
| MANAGE_STATUS_PAGES  | `1 << 6`  | Permission to create, delete, and update status pages  |
| VIEW_INCIDENTS       | `1 << 7`  | Permission to view incidents                           |
| MANAGE_INCIDENTS     | `1 << 8`  | Permission to create, delete, and update incidents     |
| MANAGE_TEAM          | `1 << 9`  | Permission to manage team members                      |
| CREATE_INVITE        | `1 << 10` | Permission to create invites                           |
