const pool = require('../config/pool');
const queries = require('../config/queries');

// Obtener un usuario por ID
const getUserById = async (id) => {
  const { rows: user } = await pool.query(queries.getUserById, [id]);
  if (user.length === 0) throw new Error('Usuario no encontrado');
  return user[0];
};

// Actualizar un usuario
const updateUser = async (id, data) => {
  const { rows: user } = await pool.query(queries.updateUser, [id, data.nombre, data.contrasena]);
  if (user.length === 0) throw new Error('Usuario no encontrado');
  return user[0];
};

// Crear un nuevo usuario
const createUser = async (email, contrasena, nombre, celular) => {
  const { rows: user } = await pool.query(queries.createUser, [email, nombre, celular, contrasena]);
  if (user.length === 0) throw new Error('Error al crear el usuario');
  return user[0];
};

// Obtener un usuario por correo electrónico
const getUserByEmail = async (email) => {
  const { rows: user } = await pool.query(queries.getUserByEmail, [email]);
  if (user.length === 0) throw new Error('Usuario no encontrado');
  return user[0];
};

module.exports = { getUserById, updateUser, createUser, getUserByEmail };


