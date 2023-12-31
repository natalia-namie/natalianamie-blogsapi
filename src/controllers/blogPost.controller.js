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

  async getAllPosts(_req, res) {
    const posts = await blogPostService.getAllPosts();
    res.status(200).json(posts);
  },

  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await blogPostService.getPostById(id);
      res.status(200).json(post);
    } catch (error) {
      if (error.message === 'Post does not exist') {
        return res.status(404).json({ message: 'Post does not exist' });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = {
  blogPostController,
};