FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Build dosyaları /app/build klasöründe hazır olur, 
# bundan sonrası deploy ortamına bağlı olarak yapılır.
