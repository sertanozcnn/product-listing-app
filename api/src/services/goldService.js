const fetch = require("node-fetch");

const getGoldPrice = async () => {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": "goldapi-2vng26qsmcsujh0i-io",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    const price = data.price_gram_24k || data.price;

    if (!price) {
      throw new Error("price_gram_24k or price not found in response");
    }

    return price;
  } catch (error) {
    console.error("Gold price fetch error:", error);
    return 74.3; // fallback sabit fiyat
  }
};

module.exports = { getGoldPrice };
