const products = require("../data/productModel.json");
const { getExchangeRate } = require("./exchangeService.js");
const { getGoldPrice } = require("./goldService.js");

//Dinamik Fiyat Hesaplamasını Yapıyoruz
//Fiyat = (popülerlikPuanı + 1) * ağırlık * altınFiyatı
const calculateProducts = async (currency = "USD") => {
  const goldPriceUSD = await getGoldPrice();
  const exchangeRate = await getExchangeRate("USD", currency);
  return products.map((product) => {
    const priceInUSD =
      (product.popularityScore + 1) * product.weight * goldPriceUSD;
    const convertedPrice = priceInUSD * exchangeRate;
    const priceFixed = convertedPrice.toFixed(2);

    return {
      ...product,
      numericPrice: Number(priceFixed),
      price:
        currency === "USD" ? `$${priceFixed} USD` : `${priceFixed} ${currency}`,
      rating: (product.popularityScore * 5).toFixed(1),
    };
  });
};

module.exports = { calculateProducts };
