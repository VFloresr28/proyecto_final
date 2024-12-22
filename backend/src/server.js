const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Importa path para manejar rutas
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Usa el puerto de entorno o 5000 por defecto

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas de la API
const routes = require('./routes');
app.use('/api', routes);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Cualquier otra ruta no manejada por las rutas del backend sirve el index.html del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores del servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});