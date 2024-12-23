const authService = require('../services/authService');

const register = async (req, res) => {
  const { email, nombre, celular, contrasena } = req.body;
  try {
    const newUser = await authService.register({ email, nombre, celular, contrasena });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error en registro:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, contrasena } = req.body;
  try {
    const { token, user } = await authService.login(email, contrasena);
    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error en login:', error.message);
    res.status(401).json({ error: error.message });
  }
};

module.exports = { register, login };