# 第一阶段：使用 Node.js 生成 HTML 文件
FROM node:14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

# 第二阶段：使用 Nginx 作静态服务器
FROM nginx:alpine
# 将生成的 HTML 文件复制到 Nginx 默认站点根目录
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]