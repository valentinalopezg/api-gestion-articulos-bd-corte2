const express = require("express");
const router = express.Router();
const articuloSchema = require("../models/articuloModel");
const mongoose = require("mongoose");

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

// Actualizar datos de articulos por ID (UPDATE)
router.put("/articulos/:id", async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    const articuloActualizado = await articuloSchema.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true, runValidators: true }
    );

    if (!articuloActualizado) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }

    res.json({
      message: "Artículo actualizado correctamente",
      articulo: articuloActualizado
    });
  } catch (error) {
    console.error("Error actualizando artículo:", error);
    res.status(500).json({ message: "Error al actualizar artículo", error: error.message });
  }
});
module.exports = router;