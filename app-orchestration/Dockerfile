FROM node:15-alpine AS builder
WORKDIR /app
COPY ./public ./public
COPY ./nginx.conf ./nginx.conf

FROM nginx:alpine
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/public .
ENTRYPOINT ["nginx","-c","/etc/nginx/conf.d/nginx.conf","-g","daemon off;"]
