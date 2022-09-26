const { Router } = require('express');
const { postLogin } = require('../controllers/login.controller');
const checkUser = require('../middlewares/checkUser');
const loginValidateFields = require('../middlewares/loginValidateFields');

const loginRouter = Router();

loginRouter.post('/', loginValidateFields, checkUser, postLogin);

module.exports = loginRouter;