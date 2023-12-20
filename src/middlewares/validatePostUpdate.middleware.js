const { BlogPost } = require('../models');

const validatePostUpdate = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const userId = req.user.id;
  const post = await BlogPost.findByPk(id);

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (post === null) {
    return res.status(404).json({ message: 'Not found' });
  }

  if (post.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  validatePostUpdate,
};