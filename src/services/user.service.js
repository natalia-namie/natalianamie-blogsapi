const jwt = require('jsonwebtoken');
const { User } = require('../models');

const userService = {
  async createUser(displayName, email, password, image) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return { error: 'User already registered', status: 409 };
    }

    const newUser = await User.create({ displayName, email, password, image });

    const payload = { id: newUser.id, displayName, email, image };
    const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return { token, status: 201 };
  },
};

module.exports = {
  userService,
};