require("dotenv").config();
const express = require("express");
const cors = require("cors");
//const productRoutes = require("./routes/product.routes");

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
//app.use("/api/products", productRoutes);

// Ana route
app.get("/", (req, res) => {
  res.send("Hello Worldsa!");
});

// Server başlatma
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
