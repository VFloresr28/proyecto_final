const pool = require('../config/pool');
const queries = require('../config/queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'default_secret';

const register = async ({ email, nombre, celular, contrasena }) => {
  try {
    const { rows: existingUser } = await pool.query(queries.getUserByEmail, [email]);
    if (existingUser.length > 0) {
      throw new Error('El email ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const { rows: newUser } = await pool.query(queries.createUser, [
      email,
      nombre,
      celular,
      hashedPassword,
    ]);

    return newUser[0];
  } catch (error) {
    throw new Error('Error en el registro: ' + error.message);
  }
};

const login = async (email, contrasena) => {
  try {

    const { rows: user } = await pool.query(queries.getUserByEmail, [email]);
    if (user.length === 0) {
      throw new Error('Credenciales inválidas');
    }

    const isValidPassword = await bcrypt.compare(contrasena, user[0].contrasena);
    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
      { id: user[0].id, email: user[0].email },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return { token, user: { id: user[0].id, email: user[0].email, nombre: user[0].nombre } };
  } catch (error) {
    throw new Error('Error al iniciar sesión: ' + error.message);
  }
};

module.exports = { register, login };
