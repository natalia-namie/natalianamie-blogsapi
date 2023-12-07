const { blogPostService } = require('../services/blogPost.service');

const blogPostController = {
  async createPost(req, res) {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;

    const result = await blogPostService.createBlogPost(title, content, categoryIds, userId);

    if (result.error) {
      return res.status(result.status).json({ message: result.error });
    }

    return res.status(result.status).json(result.result);
  },
};

module.exports = {
  blogPostController,
};