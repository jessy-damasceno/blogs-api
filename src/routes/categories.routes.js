const { Router } = require('express');
const { postCategory, getCategory } = require('../controllers/category.controller');
const validateCategory = require('../middlewares/validateCategory');

const validateToken = require('../middlewares/validateToken');

const categoriesRouter = Router();

categoriesRouter.route('/')
  .post(validateToken, validateCategory, postCategory)
  .get(validateToken, getCategory);

module.exports = categoriesRouter;