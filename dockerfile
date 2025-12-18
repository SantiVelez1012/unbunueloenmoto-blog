# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base


FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app


COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app

ARG NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
ARG NEXT_PUBLIC_CONTENTFUL_SPACE_ID
ARG NEXT_PUBLIC_CONTENTFUL_API_URL
ARG NEXT_PUBLIC_YOUTUBE_API_KEY
ARG NEXT_PUBLIC_YOUTUBE_API_URL
ARG NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
ARG NEXT_PUBLIC_CART_STORAGE_KEY
ARG NEXT_PUBLIC_COLOMBIA_API_URL
ARG NEXT_PUBLIC_SITE_URL

ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=$NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID=$NEXT_PUBLIC_CONTENTFUL_SPACE_ID
ENV NEXT_PUBLIC_CONTENTFUL_API_URL=$NEXT_PUBLIC_CONTENTFUL_API_URL
ENV NEXT_PUBLIC_YOUTUBE_API_KEY=$NEXT_PUBLIC_YOUTUBE_API_KEY
ENV NEXT_PUBLIC_YOUTUBE_API_URL=$NEXT_PUBLIC_YOUTUBE_API_URL
ENV NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=$NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
ENV NEXT_PUBLIC_CART_STORAGE_KEY=$NEXT_PUBLIC_CART_STORAGE_KEY
ENV NEXT_PUBLIC_COLOMBIA_API_URL=$NEXT_PUBLIC_COLOMBIA_API_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]