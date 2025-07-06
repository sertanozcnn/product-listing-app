const { calculateProducts } = require("../services/productService");

const getAllProducts = async (req, res) => {
  try {
    const products = await calculateProducts();
    res.json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

module.exports = { getAllProducts };
