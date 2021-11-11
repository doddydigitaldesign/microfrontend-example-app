FROM node:15-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -D @swc/core-linux-musl
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /usr/share/app
COPY --from=builder /app/build .
ENTRYPOINT ["npx","serve","-l","80"]