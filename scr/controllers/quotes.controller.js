const os = require("os");
const quotes = require("../data/quotes");

exports.random = (req, res) => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: q, containerId: os.hostname() });
};

exports.health = (_req, res) => {
  res.json({ status: "ok" });
};
