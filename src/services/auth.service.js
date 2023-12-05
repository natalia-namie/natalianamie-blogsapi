const jwt = require('jsonwebtoken');
const { User } = require('../models'); 

const authService = {
  async authenticate(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return null;
    }

    const { password: _, ...payload } = user.dataValues;
    const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return token;
  },
};

module.exports = {
  authService,
};