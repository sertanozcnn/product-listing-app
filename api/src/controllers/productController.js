const { calculateProducts } = require("../services/productService");

const getAllProducts = async (req, res) => {
  try {
    const products = await calculateProducts();
    const sort = req.query.sort;

    let sortedProducts = [...products];
    if (sort === "price_asc") {
      sortedProducts.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (sort === "price_desc") {
      sortedProducts.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (sort === "rating_asc") {
      sortedProducts.sort(
        (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
      );
    } else if (sort === "rating_desc") {
      sortedProducts.sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
    }

    res.json(sortedProducts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

module.exports = { getAllProducts };
