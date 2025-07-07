

# 🛒 Product Listing App

Bu proje, bir ürün listeleme sistemidir. **Backend** kısmı `Node.js (Express)` ile yazılmıştır, **Frontend** ise `React` kullanılarak geliştirilmiştir.

## 🌍 Canlı Demo
- 🔗 **Frontend (React):** [https://productclient-6d2739cf.b4a.run/](https://productclient-6d2739cf.b4a.run/)
- 🔗 **Backend (API):** [https://productapi-4lmzhf5w.b4a.run/api/products](https://productapi-4lmzhf5w.b4a.run/api/products)

## 📂 Proje Yapısı

product-listing-app/
├── api/ # Node.js + Express (RESTful API)
└── client/ # React (Kullanıcı Arayüzü)


---
## 🚀 Kurulum (Local Geliştirme)

### 1️⃣ Repoyu Klonlama
```bash
git clone https://github.com/sertanozcnn/product-listing-app.git
cd product-listing-app


⚙️ Backend (API) Kurulumu
📌 Gereksinimler
Node.js 18+
npm

🧩 Adımlar
------------------
cd api
npm install         # Gerekli bağımlılıkları yükle
npm start           # API'yi başlat (http://localhost:5000)

API varsayılan olarak http://localhost:5000 adresinde çalışır. Endpoint örneği: http://localhost:5000/api/products

💻 Frontend (React Client) Kurulumu
📌 Gereksinimler

Node.js 18+
npm veya yarn

🧩 Adımlar
------------------
cd ../client
npm install         # veya yarn
npm start           # React uygulamasını başlat (http://localhost:3000)

React uygulaması, API ile haberleşmek için .env dosyasında API adresini tanımlamalıdır:

🛠 Çevre Değişkenleri
React uygulaması, API ile haberleşmek için .env dosyasında API adresini tanımlamalıdır:

.env dosyası içeriği:

REACT_APP_API_URL=http://localhost:5000/api

🌐 Canlı Demo Bağlantıları
Frontend: https://productclient-6d2739cf.b4a.run/

Backend API: https://productapi-4lmzhf5w.b4a.run/api/products
