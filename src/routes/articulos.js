import express from 'express';
import Articulo from '../models/articuloModel.js';

const router = express.Router();

// Crear artículo
router.post('/', async (req, res) => {
  try {
    const nuevoArticulo = new Articulo(req.body);
    await nuevoArticulo.save();
    res.status(201).json(nuevoArticulo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todos los artículos
router.get('/', async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.status(200).json(articulos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
