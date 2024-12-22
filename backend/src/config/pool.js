const { Pool } = require('pg');

// Configuración del pool para la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "", // Para entorno de producción (Render)
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false, // SSL habilitado en producción
  host: process.env.HOST || "localhost",            // Host local en desarrollo
  user: process.env.USER || "postgres",             // Usuario local en desarrollo
  password: process.env.PASSWORD || "postgre",      // Contraseña local en desarrollo
  database: process.env.DATABASE || "marketplace",  // Base de datos local en desarrollo
  port: process.env.PORT || 5432,                   // Puerto
  allowExitOnIdle: true,                            // Cierra conexiones inactivas
});

// Log para verificar la configuración (opcional, útil para depuración)
if (process.env.NODE_ENV !== "production") {
  console.log("Configuración de conexión a la base de datos:");
  console.log({
    host: process.env.HOST || "localhost",
    user: process.env.USER || "postgres",
    password: process.env.PASSWORD ? "[OCULTO]" : "NO DEFINIDO",
    database: process.env.DATABASE || "marketplace",
    port: process.env.PORT || 5432,
  });
}

module.exports = pool;