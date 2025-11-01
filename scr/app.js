// src/app.js
const express = require("express");
const routes = require("./routes/pokeneas.routes");

const app = express();
const port = process.env.PORT || 8080;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Pokeneas escuchando en puerto ${port}`);
});
