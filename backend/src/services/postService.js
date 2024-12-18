const pool = require('../config/pool');
const queries = require('../config/queries');

const createPost = async (titulo, description, precio, userid, imagen_url) => {
  try {
    const result = await pool.query(queries.createPost, [
      titulo,
      description,
      precio,
      userid,
      imagen_url
    ]);
    if (result.rows.length === 0) {
      throw new Error('No se pudo crear el post');
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear el post:', error.message);
    throw new Error('Error creando el post: ' + error.message);
  }
};

const getAllPosts = async () => {
  try {
    const { rows: posts } = await pool.query(queries.getAllPosts);
    return posts;
  } catch (error) {
    console.error('Error obteniendo los posts:', error.message);
    throw new Error('Error obteniendo los posts: ' + error.message);
  }
};

module.exports = { createPost, getAllPosts };