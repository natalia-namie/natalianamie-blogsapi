const { Category } = require('../models');

const categoryService = {
  async createCategory(name) {
    const newCategory = await Category.create({ name });
    
    return newCategory;
  },

  async getAllCategories() {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });

    return categories;
  },
};

module.exports = {
  categoryService,
};