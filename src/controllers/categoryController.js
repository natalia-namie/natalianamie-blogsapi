const { categoryService } = require('../services/category.service');

const categoryController = {
  async createCategory(req, res) {
    const { name } = req.body;
    const result = await categoryService.createCategory(name);
  
    return res.status(201).json(result);
  }, 
};

module.exports = {
  categoryController,
};