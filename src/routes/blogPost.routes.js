const { Router } = require('express');
const { postBlogPost } = require('../controllers/blogPost.controller');
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
    postBlogPost,
    )
  .get(validateToken);

module.exports = blogPostRouter;