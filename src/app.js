const express = require('express');
const { validateLogin, validateUser, authMiddleware } = require('./middlewares');
const { authController } = require('./controllers/authController');
const { userController } = require('./controllers/userController');

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

app.get('', authMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
