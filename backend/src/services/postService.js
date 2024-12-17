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
    return result.rows[0];
  } catch (error) {
    throw new Error('Error creando el post: ' + error.message);
  }
};

const getAllPosts = async () => {
  const { rows: posts } = await pool.query(queries.getAllPosts);
  return posts;
};

module.exports = { createPost, getAllPosts };

