const express = require("express");
const router = express.Router();
const articuloSchema = require("../models/articuloModel");

// Crear nuevo artículo (CREATE)
router.post("/articulos", (req, res) => {
  const articulo = articuloSchema(req.body);
  articulo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Consultar todos los artículos (READ ALL)
router.get("/articulos", (req, res) => {
  articuloSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Consultar un artículo por ID (READ ONE)
router.get("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;