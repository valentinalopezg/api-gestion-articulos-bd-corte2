import mongoose from 'mongoose';

const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autores: { type: String, required: true },
  anioPublicacion: { type: Number, required: true },
  resumen: { type: String, required: true },
  cantidadReferencias: { type: Number, required: true },
  baseDatos: { type: String, required: true },
  fuentePublicacion: { type: String, required: true },
  enlace: { type: String, required: true },
  pdf: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Articulo', articuloSchema);
