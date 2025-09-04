FROM node:18 as build

WORKDIR /app

COPY package*.json ./

# Paksa install agar tetap jalan
# RUN npm cache clean --force
# RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:stable-alpine
RUN sed -i 's/listen       80;/listen       8889;/' /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8889
CMD ["nginx", "-g", "daemon off;"]
