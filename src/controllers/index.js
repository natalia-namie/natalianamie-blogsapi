const { authController } = require('./auth.controller');
const { userController } = require('./user.controller');
const { blogPostController } = require('./blogPost.controller');
const { updatePostController } = require('./updatePost.controller');
const { deletePostController } = require('./deletePost.controller');
 
module.exports = {
  authController,
  userController,
  blogPostController,
  updatePostController,
  deletePostController,
};