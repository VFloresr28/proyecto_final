const pool = require('./pool'); // Asegúrate de que apunte correctamente al archivo pool.js

(async () => {
  console.log("Verificando conexión a la base de datos...");

  try {
    const client = await pool.connect();
    console.log("Conexión a la base de datos exitosa 🎉");
    client.release(); // Libera el cliente después de la prueba
  } catch (error) {
    console.error("Error conectando a la base de datos:", error.message);
  } finally {
    pool.end(); // Finaliza el pool de conexiones
  }
})();
