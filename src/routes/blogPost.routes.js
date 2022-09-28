const { Router } = require('express');
const { 
  postBlogPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  getAllPostsByQuery,
} = require('../controllers/blogPost.controller');

const validateCategoryExists = require('../middlewares/validateCategoryExists');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');
const validatePostOwner = require('../middlewares/validatePostOwner');
const validateUpdatePostFields = require('../middlewares/validateUpdatePostFields');
const validateIsPostExists = require('../middlewares/validateIsPostExists');

const blogPostRouter = Router();

blogPostRouter.get('/search', validateToken, getAllPostsByQuery);

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
  .put(validateToken, validatePostOwner, validateUpdatePostFields, updatePostById)
  .delete(validateToken, validateIsPostExists, validatePostOwner, deletePostById);

module.exports = blogPostRouter;