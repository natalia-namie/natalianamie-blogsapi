const { authService } = require('../services');

const authController = {
  async login(req, res) {
    const { email, password } = req.body;
    const token = await authService.authenticate(email, password);

    if (!token) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json({ token });
  },
};

module.exports = {
  authController,
};