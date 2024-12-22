const { Pool } = require('pg');

// Configuración del pool para la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Render proporciona esta variable de entorno
  ssl: {
    rejectUnauthorized: false, // Render requiere SSL, pero sin verificación estricta
  },
});

// Log para verificar la configuración (solo en desarrollo)
if (process.env.NODE_ENV !== "production") {
  console.log("Configuración de conexión a la base de datos:");
  console.log({
    connectionString: process.env.DATABASE_URL ? "[PROPORCIONADA]" : "NO DEFINIDA",
    ssl: process.env.NODE_ENV === "production" ? "Habilitado" : "Deshabilitado",
  });
}

module.exports = pool;