const { updatePostService } = require('../services');

const updatePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const update = await updatePostService({ id, title, content });
    res.status(200).json(update);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  updatePostController,
};