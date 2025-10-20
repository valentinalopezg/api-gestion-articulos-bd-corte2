import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import articuloRoutes from './routes/articulos.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/articulos', articuloRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => console.error('Error al conectar con MongoDB:', error));
