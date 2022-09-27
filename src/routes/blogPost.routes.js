const { Router } = require('express');
// const validateUser = require('../middlewares/validateUser');
// const isExistsUser = require('../middlewares/isExistsUser');
const validateToken = require('../middlewares/validateToken');

const blogPostRouter = Router();

blogPostRouter.route('/')
  .post(validateToken, (req, res) => res.status(200).json(res.locals.user))
  .get(validateToken);

module.exports = blogPostRouter;