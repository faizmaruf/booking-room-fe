# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json + package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Install ajv dan ajv-keywords versi kompatibel
RUN npm install ajv@8 ajv-keywords@5 --legacy-peer-deps

# Copy seluruh project
COPY . .

# Build React
RUN PUBLIC_URL=/ npm run build

# Stage 2: Serve React build dengan Nginx
FROM nginx:stable-alpine

# Copy hasil build React ke folder Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Overwrite default.conf langsung (SPA support)
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
