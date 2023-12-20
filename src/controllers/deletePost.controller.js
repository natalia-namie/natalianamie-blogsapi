const { BlogPost } = require('../models');

const deletePostController = async (req, res) => {
  const { id: postId } = req.params;

  try {
    await BlogPost.destroy({ where: { id: postId } });
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  deletePostController,
};