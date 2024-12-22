const { Pool } = require("pg");
require("dotenv").config();

// Conexión a la base de datos usando las variables de entorno
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

const createTables = async () => {
  const queries = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      nombre VARCHAR(100) NOT NULL,
      celular VARCHAR(15),
      contrasena VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(100) NOT NULL,
      description VARCHAR(400),
      precio NUMERIC(10, 2) NOT NULL,
      userid INT REFERENCES users(id),
      imagen_url VARCHAR(255)
    );
  `;

  try {
    await pool.query(queries);
    console.log("Tablas creadas con éxito.");
  } catch (error) {
    console.error("Error creando tablas:", error.message);
  }
};

const insertInitialData = async () => {
  const queries = `
    INSERT INTO users (email, nombre, celular, contrasena)
    VALUES 
      ('juan@example.com', 'Juan Pérez', '123456789', 'hashed_password_juan'),
      ('maria@example.com', 'María García', '987654321', 'hashed_password_maria')
    ON CONFLICT DO NOTHING;

    INSERT INTO posts (titulo, description, precio, userid, imagen_url)
    VALUES
      ('Producto 1', 'Descripción del producto 1', 100.00, 1, 'https://example.com/image1.jpg'),
      ('Producto 2', 'Descripción del producto 2', 150.00, 2, 'https://example.com/image2.jpg')
    ON CONFLICT DO NOTHING;
  `;

  try {
    await pool.query(queries);
    console.log("Datos iniciales insertados con éxito.");
  } catch (error) {
    console.error("Error insertando datos iniciales:", error.message);
  }
};

const initializeDatabase = async () => {
  await createTables();
  await insertInitialData();
  pool.end(); // Cierra la conexión después de completar
};

initializeDatabase();
