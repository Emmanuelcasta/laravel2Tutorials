const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Servir estáticos de /imagenes (raíz del proyecto)
app.use('/imagenes', express.static(path.join(__dirname, '..', 'imagenes')));

// demo simple
app.get('/', (_req, res) => res.send('OK'));

// Rutas modulares
app.use('/api/pokeneas', require('./routes/pokeneas.routes'));
app.use('/api/quotes', require('./routes/quotes.routes'));

// Health
app.get('/health', (_req, res) => res.status(200).send('OK'));

// 404
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// Errores
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));

module.exports = app;
