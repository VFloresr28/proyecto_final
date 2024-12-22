const bcrypt = require('bcryptjs'); // Cambia bcrypt por bcryptjs
const jwt = require('jsonwebtoken');
const userService = require('../services/userService'); // Asegúrate de que este archivo maneje usuarios

const register = async ({ email, nombre, celular, contrasena }) => {
  try {
    // Encriptar contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    // Crear nuevo usuario
    const newUser = await userService.createUser(email, hashedPassword, nombre, celular);
    return newUser;
  } catch (error) {
    console.error('Error en registro:', error.message);
    throw new Error('No se pudo registrar el usuario');
  }
};

const login = async (email, contrasena) => {
  try {
    // Buscar usuario por email
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!isMatch) {
      throw new Error('Contraseña incorrecta');
    }

    // Generar token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
  } catch (error) {
    console.error('Error en login:', error.message);
    throw new Error('Error en las credenciales');
  }
};

module.exports = { register, login };
