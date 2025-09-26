// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Proxy Binance Futures 24hr ticker
app.get("/api/ticker", async (req, res) => {
  try {
    const response = await fetch("https://fapi.binance.com/fapi/v1/ticker/24hr");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ticker data" });
  }
});

// Proxy Binance Futures funding rates
app.get("/api/funding", async (req, res) => {
  try {
    const response = await fetch("https://fapi.binance.com/fapi/v1/premiumIndex");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch funding data" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
