const fetch = require("node-fetch");

const getGoldPrice = async () => {
  try {
    const response = await fetch(
      "https://api.metals.dev/v1/latest?api_key=AO8CFHNEXOXSGS9X7HPR7639X7HPR&currency=USD&unit=toz"
    );

    if (!response.ok) {
      console.error("Status:", response.status, response.statusText);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    // Doğru alan: data.metals.gold
    const pricePerOunce = data?.metals?.gold;

    if (!pricePerOunce) {
      throw new Error("Gold price not found in response");
    }

    // 1 ons = 31.1035 gram
    const pricePerGram = pricePerOunce / 31.1035;

    return pricePerGram;
  } catch (error) {
    console.error("Gold price fetch error:", error);
    return 74.3; // fallback sabit gram fiyatı (USD)
  }
};

module.exports = { getGoldPrice };
