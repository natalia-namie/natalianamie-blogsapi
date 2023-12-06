const { Category } = require('../models');

const categoryService = {
  async createCategory(name) {
    const newCategory = await Category.create({ name });
    return newCategory;
  },
};

module.exports = {
  categoryService,
};