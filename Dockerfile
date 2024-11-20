FROM node:18.12.1 as build

WORKDIR /app
COPY . .
RUN yarn cache clean
RUN yarn install --immutable

RUN yarn build

FROM node:18-alpine

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app
COPY package*.json ./
COPY --from=build --chown=nextjs:nodejs /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/next.config.ts ./
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV HOSTNAME "0.0.0.0"
ENV PORT 3000

CMD ["node", "server.js"]