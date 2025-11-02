// scr/app.js
const express = require('express');
const app = express();

// Usa el puerto de entorno (Swarm/Docker) y cae en 8080 localmente
const PORT = process.env.PORT || 8080;

app.use(express.json());

// ---- Rutas simples (demo) ----
const phrases = [
  "Get ready to be inspired…",
  "See rejection as redirection.",
  "There is beauty in simplicity.",
  "You can’t be late until you show up.",
  "Maybe life is testing you. Don’t give up.",
  "Impossible is just an opinion.",
  "Alone or not you gonna walk forward.",
];

// raíz: frase aleatoria
app.get('/', (_req, res) => {
  const number = Math.floor(Math.random() * phrases.length);
  res.send(phrases[number]);
});

// ---- Monta tus rutas modulares (si existen) ----
// Asegúrate de que estos archivos estén en scr/routes/
try {
  app.use('/api/quotes', require('./routes/quotes.routes'));
} catch {}
try {
  app.use('/api/pokeneas', require('./routes/pokeneas.routes'));
} catch {}

// Healthcheck (útil en Swarm)
app.get('/health', (_req, res) => res.status(200).send('OK'));

// 404 por defecto
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// Manejador de errores
// (Express 5 ya propaga errores async; este captura y responde)
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // por si luego quieres testearlo
