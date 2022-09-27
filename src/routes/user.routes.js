const { Router } = require('express');
const validateUser = require('../middlewares/validateUser');
const isExistsUser = require('../middlewares/isExistsUser');
const validateToken = require('../middlewares/validateToken');

const { postUser, getUser, getUserById } = require('../controllers/user.controller');

const userRouter = Router();

userRouter.route('/')
  .post(validateUser, isExistsUser, postUser)
  .get(validateToken, getUser);

userRouter.get('/:id', validateToken, getUserById);

module.exports = userRouter;