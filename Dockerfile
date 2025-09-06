# Stage 1: Build React app
FROM node:18 as build

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

# Stage 2: Serve React build pakai Nginx
FROM nginx:stable-alpine

# Copy hasil build React ke folder Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Set server_name catch-all (semua request diterima)
RUN sed -i 's/server_name  localhost;/server_name _;/' /etc/nginx/conf.d/default.conf

# Pastikan Nginx listen di port 80 internal container
RUN sed -i 's/listen       80;/listen       80;/' /etc/nginx/conf.d/default.conf

# Expose port 80 (internal container)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
