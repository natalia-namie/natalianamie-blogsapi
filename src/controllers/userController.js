const { userService } = require('../services');

const userController = {
  async createUser(req, res) {
    const { displayName, email, password, image } = req.body;
    const result = await userService.createUser(displayName, email, password, image);

    if (result.error) {
      return res.status(result.status).json({ message: result.error });
    }

    return res.status(result.status).json({ token: result.token });
  },
};

module.exports = {
  userController,
};