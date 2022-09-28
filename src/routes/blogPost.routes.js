const { Router } = require('express');
const { 
  postBlogPost,
  getAllPosts,
  getPostById,
  updatePostById,
} = require('../controllers/blogPost.controller');

const validateCategoryExists = require('../middlewares/validateCategoryExists');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');
const validatePostOwner = require('../middlewares/validatePostOwner');

const blogPostRouter = Router();

blogPostRouter.route('/')
  .post(
    validateToken,
    validatePost,
    validateCategoryExists,
    postBlogPost,
    )
  .get(
    validateToken,
    getAllPosts,
    );

blogPostRouter.route('/:id')
  .get(validateToken, getPostById)
  .put(validateToken, validatePostOwner, updatePostById);

module.exports = blogPostRouter;