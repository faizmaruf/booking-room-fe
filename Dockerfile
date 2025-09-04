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
RUN npm run build

# Stage 2: Serve React build pakai Nginx
FROM nginx:stable-alpine

# Ubah listen port ke 8889
RUN sed -i 's/listen       80;/listen       8889;/' /etc/nginx/conf.d/default.conf

# Copy hasil build React ke folder Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8889

CMD ["nginx", "-g", "daemon off;"]
