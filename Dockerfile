FROM node:22-bookworm-slim AS builder

WORKDIR /app

ENV CI=true

RUN corepack enable && corepack prepare yarn@1.22.22 --activate

COPY package.json ./
RUN yarn install --non-interactive

COPY . .

RUN yarn create:openapi
RUN yarn build


FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable && corepack prepare yarn@1.22.22 --activate

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/docusaurus.config.ts ./


EXPOSE 3000

CMD ["yarn", "serve", "--host", "0.0.0.0", "--port", "3000"]
