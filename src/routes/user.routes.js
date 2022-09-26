const { Router } = require('express');
const validateUser = require('../middlewares/validateUser');
const isExistsUser = require('../middlewares/isExistsUser');

const { postUser } = require('../controllers/user.controller');

const userRouter = Router();

userRouter.route('/')
  .post(validateUser, isExistsUser, postUser);

module.exports = userRouter;