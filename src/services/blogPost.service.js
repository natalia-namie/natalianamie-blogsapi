const { BlogPost, Category, PostCategory, User, sequelize } = require('../models');

const blogPostService = {
  async createBlogPost(title, content, categoryIds, userId) {
    const categories = await Category.findAll({ where: { id: categoryIds } });

    if (categories.length !== categoryIds.length) {
      return { error: 'one or more "categoryIds" not found', status: 400 };
    }

    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({
        title,
        content,
        userId,
        published: new Date(),
        updated: new Date(),
      }, { transaction: t });

      const categoriesToAdd = categories
        .map((category) => ({ postId: newPost.id, categoryId: category.id }));

      await PostCategory.bulkCreate(categoriesToAdd, { transaction: t });
      return newPost;
    });

    return { result, status: 201 };
  },

  async getAllPosts() {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  },

  async getPostById(postId) {
    const post = await BlogPost.findByPk(postId, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: { attributes: [] } },
      ],
    });

    if (!post) {
      throw new Error('Post does not exist');
    }
    return post;
  },
};

module.exports = {
  blogPostService,
};