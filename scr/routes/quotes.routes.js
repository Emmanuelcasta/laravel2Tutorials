const { Router } = require("express");
const ctrl = require("../controllers/quotes.controller");
const r = Router();

r.get("/quote", ctrl.random);
r.get("/health", ctrl.health);

module.exports = r;
