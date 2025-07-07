# 1. Build aşaması
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

# npm'yi güncelle (opsiyonel ama önerilir)
RUN npm install -g npm@11.4.2

# Bağımlılıkları yükle, legacy-peer-deps kullanmaya devam edebilirsin
RUN npm install --legacy-peer-deps

# İstersen audit fix yapabilirsin (riskli, dikkatli ol)
# RUN npm audit fix --force

COPY . .

RUN npm run build

# 2. Production aşaması - nginx ile serve et
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
