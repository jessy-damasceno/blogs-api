const { Router } = require('express');
const validateCategoryExists = require('../middlewares/validateCategoryExists');
// const validateUser = require('../middlewares/validateUser');
// const isExistsUser = require('../middlewares/isExistsUser');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const blogPostRouter = Router();

blogPostRouter.route('/')
  .post(
    validateToken,
    validatePost,
    validateCategoryExists,
    (req, res) => res.status(200).json(res.locals.user),
    )
  .get(validateToken);

module.exports = blogPostRouter;