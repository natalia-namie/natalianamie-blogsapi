const { authService } = require('./auth.service');
const { userService } = require('./user.service');
const { categoryService } = require('./category.service');
const { updatePostService } = require('./updatePost.service');

module.exports = {
  authService,
  userService,
  categoryService,
  updatePostService,
};