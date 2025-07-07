const products = require("../data/productModel.json");
const { getGoldPrice } = require("./goldService.js");

//Dinamik Fiyat Hesaplamasını Yapıyoruz
//Fiyat = (popülerlikPuanı + 1) * ağırlık * altınFiyatı
const calculateProducts = async () => {
  const goldPrice = await getGoldPrice(); // örneğin 74.3

  return products.map((product) => {
    const numericPrice =
      (product.popularityScore + 1) * product.weight * goldPrice;
    const price = numericPrice.toFixed(2);
    const rating = (product.popularityScore * 5).toFixed(1);

    return {
      ...product,
      numericPrice: Number(price),
      price: `$${price} USD`,
      rating: rating,
    };
  });
};

module.exports = { calculateProducts };
