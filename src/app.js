const express = require('express');
const { validateLogin, validateUser,
  authMiddleware, validateCategory, validatePost, validatePostUpdate } = require('./middlewares');
const { authController } = require('./controllers/auth.controller');
const { userController } = require('./controllers/user.controller');
const { categoryController } = require('./controllers/category.controller');
const { blogPostController } = require('./controllers/blogPost.controller');
const { updatePostController } = require('./controllers/updatePost.controller');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', validateLogin, authController.login);
app.post('/user', validateUser, userController.createUser);
app.post('/categories', authMiddleware, validateCategory, categoryController.createCategory);
app.post('/post', authMiddleware, validatePost, blogPostController.createPost);

app.get('/user', authMiddleware, userController.getAllUsers);
app.get('/user/:id', authMiddleware, userController.getUserById);
app.get('/categories', authMiddleware, categoryController.getAllCategories);
app.get('/post', authMiddleware, blogPostController.getAllPosts);
app.get('/post/:id', authMiddleware, blogPostController.getPostById);

app.put('/post/:id', authMiddleware, validatePostUpdate, updatePostController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
