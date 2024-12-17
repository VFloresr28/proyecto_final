const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Acceso denegado');

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).send('Token no válido');
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;