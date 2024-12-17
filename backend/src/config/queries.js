const getUserByEmail = 'SELECT * FROM users WHERE email = $1';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const createUser = `
  INSERT INTO users (email, nombre, celular, contrasena)
  VALUES ($1, $2, $3, $4)
  RETURNING *`;
const updateUser = `
  UPDATE users
  SET nombre = $2, contrasena = $4
  WHERE id = $1
  RETURNING *`;

const getAllPosts = `
  SELECT id, titulo, description, precio, userid, created_ad, imagen_url
  FROM posts;
`;
const createPost = `
  INSERT INTO posts (titulo, description, precio, userid, imagen_url)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
`;

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  getAllPosts,
  createPost
};
