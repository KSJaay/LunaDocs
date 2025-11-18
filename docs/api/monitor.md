---
aside: false

description: API documentation for managing monitors in Lunalytics, including setup, retrieval, and monitoring of application health and uptime.
keywords:
  [
    Lunalytics,
    monitor,
    API,
    application monitoring,
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

# Monitor Endpoints

Monitor endpoints are used to manage monitors, retrieve monitor data, and delete monitors. All endpoints modifying the monitors require `VIEW_MONITORS` and `MANAGE_MONITORS` permissions, and endpoints to fetch monitors require `VIEW_MONITORS` permission.

## Monitor Object

The monitor object may contain different fields based on the type of monitor (Docker, HTTP, TCP, etc...). Below is the full structure of a monitor object and where fields start with `?`, they may not be present based on the monitor type.

### Monitor Structure

| Field                   | Type                                      | Description                                              |
| ----------------------- | ----------------------------------------- | -------------------------------------------------------- |
| monitorId               | string                                    | Unique id for the monitor                                |
| name                    | string                                    | Name of the monitor                                      |
| url                     | string                                    | URL/IP/Identifier of the monitor                         |
| retry                   | integer                                   | Number of retries before sending notification            |
| interval                | integer                                   | Interval between each ping to monitor                    |
| retryInterval           | integer                                   | Retry interval after a failed ping                       |
| requestTimeout          | integer                                   | Request timeout for ping                                 |
| method                  | ?string                                   | Method for http monitor                                  |
| headers                 | ?object                                   | Headers object for http request                          |
| body                    | ?object                                   | Body object for http request                             |
| ignoreTls               | ?boolean                                  | Whether to ignore TLS for HTTPS monitors                 |
| valid_status_codes      | ?array                                    | Array of valid status codes for http request             |
| email                   | string                                    | Email address for the user who created the monitor       |
| type                    | string                                    | Type of montior (HTTP/TCP)                               |
| port                    | ?integer                                  | Port for the TCP monitor                                 |
| uptimePercentage        | integer                                   | Uptime percentage for the monitor over the last 24 hours |
| averageHeartbeatLatency | integer                                   | Average latency for the monitor over the last 24 hours   |
| showFilters             | boolean                                   | Used to check if hourly heartbeats are available         |
| paused                  | boolean                                   | Boolean if the monitor is paused                         |
| notificationId          | ?string                                   | Notification id associated with the monitor              |
| notificationType        | ?string                                   | Type of notifications to send for monitor                |
| icon                    | [object](#icon-structure)                 | Icon information for the monitor                         |
| heartbeats              | ?Array<[Heartbeat](#heartbeat-structure)> | Array of monitor heartbeats                              |
| cert                    | ?[Certificate](#certificate-structure)    | Information about the certificate                        |

### Example Full Monitor

::: code-group

```json [Docker]
{
  "monitorId": "4d048471-9e85-428b-8050-4238f6033478",
  "name": "Lunalytics",
  "url": "lunalytics-container",
  "retry": 3,
  "interval": 30,
  "retryInterval": 30,
  "requestTimeout": 30,
  "email": "KSJaay@lunalytics.xyz",
  "type": "docker",
  "uptimePercentage": 83,
  "averageHeartbeatLatency": 38,
  "showFilters": true,
  "paused": false,
  "notificationId": null,
  "notificationType": null,
  "icon": {
    "id": "lunalytics",
    "name": "Lunalytics",
    "url": "https://lunalytics.xyz/icon.svg"
  },
  "heartbeats": [
    {
      "id": 38,
      "status": 200,
      "latency": 38,
      "date": 1708095536463,
      "isDown": false,
      "message": "200 - OK"
    }
    {
      "id": 23,
      "status": 200,
      "latency": 38,
      "date": 1714178279326,
      "isDown": false,
      "message": "200 - OK"
    },
    ...
  ]
}
```

```json [HTTP]
{
  "monitorId": "4d048471-9e85-428b-8050-4238f6033478",
  "name": "Lunalytics",
  "url": "https://demo.lunalytics.xyz/api/status",
  "retry": 3,
  "interval": 30,
  "retryInterval": 30,
  "requestTimeout": 30,
  "method": "GET",
  "headers": {},
  "body": {},
  "ignoreTls": false,
  "valid_status_codes": ["200-299"],
  "email": "KSJaay@lunalytics.xyz",
  "type": "http",
  "port": null,
  "uptimePercentage": 83,
  "averageHeartbeatLatency": 38,
  "showFilters": true,
  "paused": false,
  "notificationId": null,
  "notificationType": null,
  "icon": {
    "id": "lunalytics",
    "name": "Lunalytics",
    "url": "https://lunalytics.xyz/icon.svg"
  },
  "heartbeats": [
    {
      "id": 38,
      "status": 200,
      "latency": 38,
      "date": 1708095536463,
      "isDown": false,
      "message": "200 - OK"
    }
    {
      "id": 23,
      "status": 200,
      "latency": 38,
      "date": 1714178279326,
      "isDown": false,
      "message": "200 - OK"
    },
    ...
  ],
  "cert": {
    "isValid": true,
    "issuer": { "C": "US", "O": "Let's Encrypt", "CN": "R3" },
    "validFrom": "Apr 11 03:50:40 2024 GMT",
    "validTill": "Jul 10 03:50:39 2024 GMT",
    "validOn": ["lunalytics.xyz", "www.lunalytics.xyz"],
    "daysRemaining": "72",
    "nextCheck": 1714178279326
  }
}
```

```json [JSON]
{
  "monitorId": "4d048471-9e85-428b-8050-4238f6033478",
  "name": "Lunalytics",
  "url": "https://demo.lunalytics.xyz/api/status",
  "retry": 3,
  "interval": 30,
  "retryInterval": 30,
  "requestTimeout": 30,
  "method": "GET",
  "headers": {},
  "body": {},
  "ignoreTls": false,
  "json_query": [{ "key": "data.uptime", "type": "==", "value": "up" }],
  "email": "KSJaay@lunalytics.xyz",
  "type": "json",
  "port": null,
  "uptimePercentage": 83,
  "averageHeartbeatLatency": 38,
  "showFilters": true,
  "paused": false,
  "notificationId": null,
  "notificationType": null,
  "icon": {
    "id": "lunalytics",
    "name": "Lunalytics",
    "url": "https://lunalytics.xyz/icon.svg"
  },
  "heartbeats": [
    {
      "id": 38,
      "status": 200,
      "latency": 38,
      "date": 1708095536463,
      "isDown": false,
      "message": "200 - OK"
    }
    {
      "id": 23,
      "status": 200,
      "latency": 38,
      "date": 1714178279326,
      "isDown": false,
      "message": "200 - OK"
    },
    ...
  ],
  "cert": {
    "isValid": true,
    "issuer": { "C": "US", "O": "Let's Encrypt", "CN": "R3" },
    "validFrom": "Apr 11 03:50:40 2024 GMT",
    "validTill": "Jul 10 03:50:39 2024 GMT",
    "validOn": ["lunalytics.xyz", "www.lunalytics.xyz"],
    "daysRemaining": "72",
    "nextCheck": 1714178279326
  }
}
```

```json [Ping]
{
  "monitorId": "4d048471-9e85-428b-8050-4238f6033478",
  "name": "Lunalytics",
  "url": "127.0.0.1",
  "retry": 3,
  "interval": 30,
  "retryInterval": 30,
  "requestTimeout": 30,
  "email": "KSJaay@lunalytics.xyz",
  "type": "ping",
  "uptimePercentage": 83,
  "averageHeartbeatLatency": 38,
  "showFilters": true,
  "paused": false,
  "notificationId": null,
  "notificationType": null,
  "icon": {
    "id": "lunalytics",
    "name": "Lunalytics",
    "url": "https://lunalytics.xyz/icon.svg"
  },
  "heartbeats": [
    {
      "id": 38,
      "status": 200,
      "latency": 38,
      "date": 1708095536463,
      "isDown": false,
      "message": "200 - OK"
    }
    {
      "id": 23,
      "status": 200,
      "latency": 38,
      "date": 1714178279326,
      "isDown": false,
      "message": "200 - OK"
    },
    ...
  ]
}
```

```json [Push]
{
  "monitorId": "4d048471-9e85-428b-8050-4238f6033478",
  "name": "Lunalytics",
  "url": "reallyRandomTokenGoesHere12345",
  "retry": 3,
  "interval": 30,
  "retryInterval": 30,
  "requestTimeout": 30,
  "email": "KSJaay@lunalytics.xyz",
  "type": "push",
  "uptimePercentage": 83,
  "averageHeartbeatLatency": 38,
  "showFilters": true,
  "paused": false,
  "notificationId": null,
  "notificationType": null,
  "icon": {
    "id": "lunalytics",
    "name": "Lunalytics",
    "url": "https://lunalytics.xyz/icon.svg"
  },
  "heartbeats": [
    {
      "id": 38,
      "status": 200,
      "latency": 38,
      "date": 1708095536463,
      "isDown": false,
      "message": "200 - OK"
    }
    {
      "id": 23,
      "status": 200,
      "latency": 38,
      "date": 1714178279326,
      "isDown": false,
      "message": "200 - OK"
    },
    ...
  ]
}
```

```json [TCP]
{
  "monitorId": "4d048471-9e85-428b-8050-4238f6033478",
  "name": "Lunalytics TCP",
  "url": "127.0.0.1",
  "interval": 30,
  "retryInterval": 30,
  "requestTimeout": 30,
  "method": null,
  "headers": null,
  "body": null,
  "valid_status_codes": null,
  "email": "KSJaay@lunalytics.xyz",
  "type": "tcp",
  "port": 2308,
  "uptimePercentage": 83,
  "averageHeartbeatLatency": 38,
  "showFilters": false,
  "paused": false,
  "heartbeats": [
    {
      "id": 38,
      "status": "ALIVE",
      "latency": 38,
      "date": 1708095536463,
      "isDown": false,
      "message": "Up and running!"
    }
    {
      "id": 23,
      "status": "ALIVE",
      "latency": 38,
      "date": 1714178279326,
      "isDown": false,
      "message": "Up and running!"
    },
    ...
  ]
}
```

:::

## Certificate Object

### Certificate Structure

| Field         | Type    | Description                                             |
| ------------- | ------- | ------------------------------------------------------- |
| isValid       | boolean | Boolean if the certificate is valid                     |
| issuer        | object  | Information about the issuer of the certificate         |
| validFrom     | date    | Date the certificate was issued                         |
| validTill     | date    | Date the certificate expires                            |
| validOn       | array   | Array of urls the certificate is valid for              |
| daysRemaining | number  | Number of days the certificate is valid                 |
| nextCheck     | number  | Time of next time certificate should be checked (in ms) |

### Example Certificate

```json
{
  "isValid": true,
  "issuer": { "C": "US", "O": "Let's Encrypt", "CN": "R3" },
  "validFrom": "Apr 11 03:50:40 2024 GMT",
  "validTill": "Jul 10 03:50:39 2024 GMT",
  "validOn": ["lunalytics.xyz", "www.lunalytics.xyz"],
  "daysRemaining": "72",
  "nextCheck": 1714178279326
}
```

## Heartbeat Object

### Heartbeat Structure

| Field   | Type          | Description                           |
| ------- | ------------- | ------------------------------------- |
| id      | string        | Unique Id for that specific heartbeat |
| status  | number/string | Status code from request              |
| latency | number        | Latency of request                    |
| date    | number        | Date the request was made (in ms)     |
| isDown  | boolean       | Boolean if the monitor is down        |
| message | string        | Message from request                  |

### Example Heartbeat

```json
{
  "id": 23,
  "status": 200,
  "latency": 38,
  "date": 1714178279326,
  "isDown": false,
  "message": "200 - OK"
}
```

## Icon Object

### Icon Structure

| Field | Type   | Description            |
| ----- | ------ | ---------------------- |
| id    | string | Unique Id for the icon |
| name  | string | Name of the icon       |
| url   | string | URL to the icon image  |

### Example Icon

```json
{
  "id": "lunalytics",
  "name": "Lunalytics",
  "url": "https://lunalytics.xyz/icon.svg"
}
```

## Add a new monitor

### <Badge type="post" text="POST" /> /api/monitor/add

Create a new monitor with the provided payload in the request body, validation will occur according the [schema](/api/validation/monitor). Returns the [full monitor](#monitor-structure) object for the new monitor added.

## Edit a monitor

### <Badge type="post" text="POST" /> /api/monitor/edit

Edit monitor with the provided payload in the request body, validation will occur according the [schema](/api/validation/monitor). Returns the [full monitor](#monitor-structure) object for the edited monitor.

## Delete monitor

### <Badge type="tip" text="GET" /> /api/monitor/delete

Deletes the monitor, along with the heartbeats and certificates.

### Query Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| monitorId | `string` | Monitor id for the monitor to be deleted. |

## Get monitor status

### <Badge type="tip" text="GET" /> /api/monitor/status

Endpoint returns an array of [heartbeats](#heartbeat-structure) within the given timespace. Heartbeats for week and month are the heartbeats closest to every fith minute within the time span.

### Query Parameters

| Parameter | Type     | Description                                                                     |
| --------- | -------- | ------------------------------------------------------------------------------- |
| monitorId | `string` | Monitor id for the monitor to be deleted.                                       |
| status    | `string` | Time span for heartbeats to be retrieved. (`latest`, `day`, `week`, or `month`) |

## Get a specific monitor

### <Badge type="tip" text="GET" /> /api/monitor/id

Returns the [full monitor](#monitor-structure) object for a specific monitor using the given monitor id.

### Query Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| monitorId | `string` | Monitor id for the monitor to be deleted. |
