const { Router } = require('express');
const { postCategory } = require('../controllers/category.controller');
const validateCategory = require('../middlewares/validateCategory');

const validateToken = require('../middlewares/validateToken');

const categoriesRouter = Router();

categoriesRouter.route('/')
  .post(validateToken, validateCategory, postCategory);

module.exports = categoriesRouter;