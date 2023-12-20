const { BlogPost } = require('../models');

const validatePostToDelete = async (req, res, next) => {
  const { id: postId } = req.params;
  const userId = req.user.id;

  try {
    const post = await BlogPost.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    if (post.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    return next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  validatePostToDelete,
};
