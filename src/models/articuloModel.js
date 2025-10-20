const mongoose = require("mongoose");

const articuloSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autores: {
    type: String,
    required: true,
  },
  anioPublicacion: {
    type: Number,
    required: true,
  },
  resumen: {
    type: String,
    required: true,
  },
  cantidadReferencias: {
    type: Number,
    required: true,
  },
  baseDatos: {
    type: String,
    required: true,
  },
  fuentePublicacion: {
    type: String,
    required: true,
  },
  enlace: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Articulo", articuloSchema);
