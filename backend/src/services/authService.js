const pool = require('../config/pool');
const queries = require('../config/queries');
const bcrypt = require('bcryptjs'); // Cambiar a bcryptjs para evitar problemas de compatibilidad
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'default_secret';

const register = async ({ email, nombre, celular, contrasena }) => {
  try {
    // Verificar si el usuario ya existe
    const { rows: existingUser } = await pool.query(queries.getUserByEmail, [email]);
    if (existingUser.length > 0) {
      throw new Error('El email ya está registrado');
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crear el usuario
    const { rows: newUser } = await pool.query(queries.createUser, [
      email,
      nombre,
      celular,
      hashedPassword,
    ]);

    return {
      id: newUser[0].id,
      email: newUser[0].email,
      nombre: newUser[0].nombre,
      celular: newUser[0].celular,
    };
  } catch (error) {
    console.error('Error en el registro:', error.message);
    throw new Error('Error en el registro: ' + error.message);
  }
};

const login = async (email, contrasena) => {
  try {
    // Buscar el usuario por email
    const { rows: user } = await pool.query(queries.getUserByEmail, [email]);
    if (user.length === 0) {
      throw new Error('Credenciales inválidas');
    }

    // Verificar la contraseña
    const isValidPassword = await bcrypt.compare(contrasena, user[0].contrasena);
    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user[0].id, email: user[0].email },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return {
      token,
      user: {
        id: user[0].id,
        email: user[0].email,
        nombre: user[0].nombre,
        celular: user[0].celular,
      },
    };
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    throw new Error('Error al iniciar sesión: ' + error.message);
  }
};

module.exports = { register, login };