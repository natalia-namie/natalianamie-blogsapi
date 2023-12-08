const express = require('express');
const { validateLogin, validateUser,
  authMiddleware, validateCategory, validatePost } = require('./middlewares');
const { authController } = require('./controllers/authController');
const { userController } = require('./controllers/userController');
const { categoryController } = require('./controllers/categoryController');
const { blogPostController } = require('./controllers/blogPostController');

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

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
