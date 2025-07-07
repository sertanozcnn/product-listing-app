require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(cors());
app.use("/api/products", productRoutes);

// Routes
//app.use("/api/products", productRoutes);

// Ana route

// Server başlatma
const corsOptions = {
  origin: "*", // veya sadece frontend URL'si (örneğin: "https://yourfrontend.com")
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Eğer kimlik doğrulama varsa
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Product API is running");
});
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
