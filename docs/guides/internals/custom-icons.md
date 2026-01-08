---
title: Custom Icons
description: Guide on how to setup custom icons in Lunalytics for monitors.
keywords:
  [
    Lunalytics,
    introduction,
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
    custom icons,
  ]
---

# Setting up custom icons

You can set icons for your monitors to better represent the service being monitored. Lunalytics also allows you to upload your own custom icons in addition to the pre-existing icon collection.

## Uploading Custom Icons

To upload custom icons, follow these steps:

- Create a file named `icons.json` in the `data` directory of your Lunalytics installation.
- The `icons.json` file should contain a JSON array of objects, each representing an icon with the following structure:

  ```json
  [
    {
      "id": "unique-icon-id",
      "name": "custom-icon-name",
      "url": "https://demo.lunalytics.xyz/logo.svg"
    },
    {
      "id": "another-unique-icon-id",
      "name": "another-icon",
      "url": "https://example.com/path-to-another-icon.png"
    }
  ]
  ```

## Pre-existing Icons

The current list of items are provided by [Selfh.st](https://selfh.st/icons/). You can use the search functionality on our icon selection modal to find icons from this collection. Along with any custom icons you have uploaded yourself.

We'll be adding more icons to this collection over time. If you have any specific requests, feel free to open an issue on our [GitHub repository](https://github.com/ksjaay/lunalytics).
