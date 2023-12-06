const { categoryService } = require('../services/category.service');

const categoryController = {
  async createCategory(req, res) {
    const { name } = req.body;
    const result = await categoryService.createCategory(name);
  
    return res.status(201).json(result);
  },

  async getAllCategories(req, res) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = {
  categoryController,
};