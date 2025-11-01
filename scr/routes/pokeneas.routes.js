// src/routes/pokeneas.routes.js
const { Router } = require("express");
const ctrl = require("../controllers/pokeneas.controller");

const router = Router();

// Ruta JSON con los datos del Pokenea
router.get("/pokenea", ctrl.getRandomPokenea);

// Ruta HTML con la imagen y frase filosófica
router.get("/filosofia", ctrl.getFilosofiaPokenea);

module.exports = router;
