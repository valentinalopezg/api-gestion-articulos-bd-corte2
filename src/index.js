const parser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const articuloRoutes = require("./routes/articulos");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use("/api", articuloRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch((error) => console.log("Error de conexión:", error));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
