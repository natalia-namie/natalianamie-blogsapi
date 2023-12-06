const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [, jwtToken] = bearerToken.split(' '); // Extrai o token da string "Bearer" 

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = decoded.data;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authMiddleware,
};