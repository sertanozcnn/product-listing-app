# 1. Build aşaması
FROM node:18 AS build

WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle --legacy-peer-deps ile
RUN npm install --legacy-peer-deps

# Tüm dosyaları kopyala
COPY . .

# React uygulamasını build et
RUN npm run build

# 2. Production aşaması - nginx ile serve et
FROM nginx:alpine

# Build edilen dosyaları nginx klasörüne kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Nginx port 80'i expose et
EXPOSE 80

# Nginx'i foreground modda başlat
CMD ["nginx", "-g", "daemon off;"]
