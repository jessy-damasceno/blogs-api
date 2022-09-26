const { Router } = require('express');
// const checkUser = require('../middlewares/checkUser');
// const loginValidateFields = require('../middlewares/loginValidateFields');

const userRouter = Router();

userRouter.route('/')
  .post()
  .get();

module.exports = userRouter;