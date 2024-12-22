const pool = require("./src/config/pool");

const testDbConnection = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Conexión exitosa:", result.rows);
  } catch (error) {
    console.error("Error conectando a la base de datos:", error.message);
  } finally {
    pool.end();
  }
};

testDbConnection();

