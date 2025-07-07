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
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
