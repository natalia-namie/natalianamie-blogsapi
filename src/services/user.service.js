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

  async getAllUsers() {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
  },

  async getUserById(id) {
    const user = await User.findByPk(id, {
      attributes: ['id', 'displayName', 'email', 'image'],
    });

    if (!user) {
      return { error: 'User does not exist', status: 404 };
    }

    return { user, status: 200 };
  },
};

module.exports = {
  userService,
};