const { validateLogin } = require('./validateLogin.middleware');
const { validateUser } = require('./validateUser.middleware');

module.exports = {
  validateLogin,
  validateUser,
};