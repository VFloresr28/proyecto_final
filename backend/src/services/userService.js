const pool = require('../config/pool');
const queries = require('../config/queries');

const getUserById = async (id) => {
  const { rows: user } = await pool.query(queries.getUserById, [id]);
  if (user.length === 0) throw new Error('Usuario no encontrado');
  return user[0];
};

const updateUser = async (id, data) => {
  const { rows: user } = await pool.query(queries.updateUser, [id, data.nombre, data.contrasena]);
  if (user.length === 0) throw new Error('Usuario no encontrado');
  return user[0];
};

module.exports = { getUserById, updateUser };

