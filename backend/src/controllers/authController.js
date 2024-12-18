const authService = require('../services/authService');

const register = async (req, res) => {
  const { email, nombre, celular, contrasena } = req.body;
  try {

    const newUser = await authService.register({ email, nombre, celular, contrasena });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error en el registro: ' + error.message });
  }
};

const login = async (req, res) => {
  const { email, contrasena } = req.body;
  try {

    const { token, user } = await authService.login(email, contrasena);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
};

module.exports = { register, login };