FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build || echo "no build step"

FROM node:18-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app .
EXPOSE 3001
CMD ["node", "index.js"]
