const { BlogPost, Category } = require('../models');

const updatePostService = async ({ id, title, content }) => {
  try {
    await BlogPost.update({ title, content }, { where: { id } });

    const updatedPost = await BlogPost.findByPk(id, {
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return updatedPost;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};  

module.exports = {
  updatePostService,
};