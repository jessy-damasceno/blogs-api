const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const blogPostRouter = require('./routes/blogPost.routes');
const categoriesRouter = require('./routes/categories.routes');
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostRouter);

app.use(errorMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
