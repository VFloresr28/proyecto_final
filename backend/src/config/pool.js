const { Pool } = require("pg");

// Configuración del pool para la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Render proporciona esta variable de entorno
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false, // SSL para producción
});

// Log para depuración (opcional)
if (process.env.NODE_ENV !== "production") {
  console.log("Configuración de conexión a la base de datos:");
  console.log({
    connectionString: process.env.DATABASE_URL ? "[PROPORCIONADA]" : "NO DEFINIDA",
    ssl: process.env.NODE_ENV === "production" ? "Habilitado" : "Deshabilitado",
  });
}

// No llames a `pool.end()` aquí; esto debe hacerse explícitamente cuando finalices toda la aplicación.
module.exports = pool;
