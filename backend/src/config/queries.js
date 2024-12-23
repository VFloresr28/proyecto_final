const getUserByEmail = `
  SELECT * 
  FROM users 
  WHERE email = $1;
`;

const getUserById = `
  SELECT * 
  FROM users 
  WHERE id = $1;
`;

const createUser = `
  INSERT INTO users (email, nombre, celular, contrasena)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;

const updateUser = `
  UPDATE users
  SET nombre = $2, celular = $3, contrasena = $4
  WHERE id = $1
  RETURNING *;
`;

const getAllPosts = `
  SELECT id, titulo, description, precio, userid, imagen_url
  FROM posts;
`;

const getPostById = `
  SELECT id, titulo, description, precio, userid, imagen_url
  FROM posts
  WHERE id = $1;
`;

const createPost = `
  INSERT INTO posts (titulo, description, precio, userid, imagen_url)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
`;

const getRandomPosts = `
  SELECT * 
  FROM posts
  ORDER BY RANDOM()
  LIMIT 6;
`;

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  getAllPosts,
  getPostById,
  createPost,
  getRandomPosts,
};
