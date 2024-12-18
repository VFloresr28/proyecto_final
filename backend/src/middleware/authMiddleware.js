const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  console.log("Middleware de autenticación iniciado...");

  const token = req.header('Authorization')?.split(' ')[1];
  console.log("Token recibido:", token || "No se recibió token");

  if (!token) {
    console.log("Acceso denegado: No se proporcionó token.");
    return res.status(403).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    console.log("Token verificado correctamente. Datos del token:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verificando el token:", error.message);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado, por favor inicie sesión nuevamente.' });
    }
    
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = authenticateToken;