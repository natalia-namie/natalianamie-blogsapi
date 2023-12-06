const { validateLogin } = require('./validateLogin.middleware');
const { validateUser } = require('./validateUser.middleware');
const { authMiddleware } = require('./validateJWT.middleware');
const { validateCategory } = require('./validateCategory.middleware');

module.exports = {
  validateLogin,
  validateUser,
  authMiddleware,
  validateCategory,
};