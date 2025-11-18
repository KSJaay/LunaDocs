---
title: Lunalytics Configuration Guide
description: Guide to configuring Lunalytics for secure and reliable application monitoring, including setup scripts and config.json options.
keywords:
  [
    Lunalytics,
    configuration,
    setup,
    config.json,
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
  ]
---

# Configuration

## Setup Lunalytics

Configurations don't need to be setup before starting Lunalytics. But this it is HIGHLY recommended you run the setup script or create a `config.json` for security reasons. A script can be created by running the following command:

::: code-group

```bash [npm]
# Setup application
npm run setup
```

```bash [yarn]
# Setup application
yarn setup
```

```bash [pnpm]
# Setup application
pnpm setup

```

:::

The following values need to be added to the config.json file:

| Key             | Default                  | Type                                                        |
| --------------- | ------------------------ | ----------------------------------------------------------- |
| Port            | `2308`                   | Number                                                      |
| Database        | [SQLite](#sqlite-config) | [SQLite](#sqlite-config) / [PostgreSQL](#postgresql-config) |
| migrationType   | `automatic`              | "automatic" / "manual"                                      |
| version         | package.json version     | String                                                      |
| websiteUrl      | `null`                   | String                                                      |
| retentionPeriod | `6m`                     | String                                                      |
| register        | `true`                   | Boolean                                                     |
| isDemo          | `undefined`              | Boolean                                                     |

#### SQLite config

```json
{
  "name": String,
  "type": "better-sqlite3"
}

```

#### PostgreSQL config

```json
{
  "name": String,
  "type": "pg",
  "config": {
    "host": String,
    "port": Number,
    "user": String,
    "password": String
  }
}
```
