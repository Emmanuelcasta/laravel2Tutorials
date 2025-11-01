// src/controllers/pokeneas.controller.js
const os = require("os");
const pokeneas = require("../data/pokeneas");

// Ruta que devuelve un Pokenea aleatorio con su información
exports.getRandomPokenea = (req, res) => {
  const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const payload = {
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: os.hostname()
  };
  res.json(payload);
};

// Ruta que devuelve la imagen y la frase filosófica de un Pokenea aleatorio
exports.getFilosofiaPokenea = (req, res) => {
  const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const html = `
  <!doctype html>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Pokeneas</title>
      <style>
        body { font-family: system-ui, sans-serif; margin: 2rem; }
        .card { max-width: 560px; border: 1px solid #ddd; padding: 1rem; border-radius: 12px; }
        img { max-width: 100%; height: auto; border-radius: 12px; }
        .id { color: #666; font-size: 0.9rem; margin-top: .5rem; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>${pokenea.nombre}</h1>
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}" />
        <p><em>"${pokenea.frase}"</em></p>
        <p class="id">Container Id: ${os.hostname()}</p>
      </div>
    </body>
  </html>`;
  
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(html);
};
