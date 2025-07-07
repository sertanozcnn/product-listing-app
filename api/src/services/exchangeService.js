const fetch = require("node-fetch");

require("dotenv").config();

const API_KEY = process.env.EXCHANGE_API_KEY;
const currencyCache = {};

const getExchangeRate = async (from, to) => {
  if (from === to) return 1;

  const cacheKey = `${from}_${to}`;
  if (currencyCache[cacheKey]) {
    return currencyCache[cacheKey];
  }

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
    );
    const data = await response.json();

    // Eğer API başarısızsa
    if (data.result !== "success") {
      throw new Error(data["error-type"] || "Unknown error from exchange API");
    }

    const rate = data.conversion_rates[to];
    if (!rate) {
      throw new Error(`Exchange rate not found for ${from} to ${to}`);
    }

    currencyCache[cacheKey] = rate;
    return rate;
  } catch (error) {
    console.error("Exchange rate fetch error:", error.message);
    if (from === "USD" && to === "TRY") return 39.9;
    return 1;
  }
};

module.exports = { getExchangeRate };
