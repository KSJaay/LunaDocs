---
outline: deep

description: Learn how to set up and start using Lunalytics, the open source application monitoring and status page platform. Get your monitoring and notifications running in minutes.
keywords:
  [
    Lunalytics,
    getting started,
    setup,
    installation,
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

# 🚀 Getting Started

## Try out the live demo

You can try out the Lunalytics [live demo here](https://demo.lunalytics.xyz). You will be signed in as a guest user who has the ability to look through all sections of the application.

### Docker

::: code-group

```bash [Docker]
docker run -d \
  -p 2308:2308 \
  -v /path/to/data:/app/data \
  -v /path/to/logs:/app/logs \
  ksjaay/lunalytics:latest
```

```yaml [Docker Compose]
# docker-compose.yml
services:
  lunalytics:
    image: ksjaay/lunalytics:latest
    container_name: lunalytics
    ports:
      - '2308:2308'
    volumes:
      - ./path/to/data:/app/data
      - ./path/to/logs:/app/logs
```

:::

### Requirements

Make sure you have the following applications installed before starting:

- [Nodejs](https://nodejs.org/en/download/) (v22 or higher)
- Npm or [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Git](https://git-scm.com/)

### Clone application

```bash
git clone https://github.com/KSJaay/Lunalytics.git
cd Lunalytics
```

### Setup application

::: code-group

```bash [npm]
# Setup application
npm run setup

# Start application using scripts
npm run start

# Alternatively start application using
node server/index.js
```

```bash [yarn]
# Setup application
yarn setup

# Start application using scripts
yarn start

# Alternatively start application using
node server/index.js
```

```bash [pnpm]
# Setup application
pnpm setup

# Start application using scripts
pnpm start

# Alternatively start application using
node server/index.js
```

:::

Lunalytics will be accessible on `http://localhost:2308`

### Using pm2 to run application in the background

::: code-group

```bash [npm]
# Install pm2 globally
npm install pm2 -g

# Start the server
pm2 start server/index.js --name Lunalytics

# Or start the server using script
pm2 start npm --name "Lunalytics" -- run start

# Optional
pm2 save
pm2 startup

## Monitoring console output
pm2 monit
```

```bash [yarn]
# Install pm2 globally
yarn global add pm2

# Start the server
pm2 start server/index.js --name Lunalytics

# Or start the server using script
pm2 start yarn --name "Lunalytics" -- start

# Optional
pm2 save
pm2 startup

## Monitoring console output
pm2 monit
```

```bash [pnpm]
# Install pm2 globally
pnpm add -g pm2

# Start the server
pm2 start server/index.js --name Lunalytics

# Or start the server using script
pm2 start pnpm --name "Lunalytics" -- start

# Optional
pm2 save
pm2 startup

## Monitoring console output
pm2 monit
```

:::
