# Resmi Node.js 18 imajını baz al
FROM node:18

# Çalışma dizinini belirle
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamanın dinleyeceği portu belirt (örneğin 5000)
EXPOSE 5000

# Uygulamayı başlat
CMD ["node", "index.js"]
