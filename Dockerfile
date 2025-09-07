# Stage 1: Build React app
FROM node:18 as build
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install ajv@8 ajv-keywords@5 --legacy-peer-deps

COPY . .
RUN PUBLIC_URL=/ npm run build

# Stage 2: Serve React build pakai Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Catch-all server_name
RUN sed -i 's/server_name  localhost;/server_name _;/' /etc/nginx/conf.d/default.conf

# Gunakan port 80 internal
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
