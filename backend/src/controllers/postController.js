const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postService.getPostById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error obteniendo el post por ID:', error.message);
    res.status(500).json({ error: error.message });
  }
};


const createPost = async (req, res) => {
  const { titulo, description, precio, userid, imagen_url } = req.body;

  if (!titulo || !description || !precio || !userid || !imagen_url) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const newPost = await postService.createPost(titulo, description, precio, userid, imagen_url);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error en createPost:", error.message, error.stack);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllPosts, getPostById, createPost };