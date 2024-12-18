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

    if (posts.length === 0) {
      console.warn('No se encontraron posts');
    }

    return posts;
  } catch (error) {
    console.error('Error obteniendo los posts:', error.message);
    throw new Error('Error obteniendo los posts: ' + error.message);
  }
};

const getPostById = async (id) => {
  try {
    const { rows: post } = await pool.query(
      "SELECT id, titulo, description, precio, userid, imagen_url FROM posts WHERE id = $1",
      [id]
    );

    if (post.length === 0) {
      throw new Error("Post no encontrado");
    }

    return post[0];
  } catch (error) {
    console.error("Error obteniendo el post por ID:", error.message);
    throw new Error("Error obteniendo el post por ID: " + error.message);
  }
};

const getRandomPosts = async () => {
  try {
    const { rows: posts } = await pool.query(queries.getRandomPosts);
    return posts;
  } catch (error) {
    console.error("Error obteniendo posts aleatorios:", error.message);
    throw new Error("Error obteniendo posts aleatorios: " + error.message);
  }
};

module.exports = { createPost, getAllPosts, getPostById, getRandomPosts };