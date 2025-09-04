# Step 1: Build React app
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Step 2: Serve pakai Nginx
FROM nginx:stable-alpine

# Ubah default.conf supaya Nginx listen di 8889
RUN sed -i 's/listen       80;/listen       8889;/' /etc/nginx/conf.d/default.conf

# Copy hasil build React ke folder Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8889
CMD ["nginx", "-g", "daemon off;"]
