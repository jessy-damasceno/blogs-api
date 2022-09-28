const { findById } = require('../services/blogPost.service');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { user } = res.locals;

    const post = await findById(id);

    if (user.id === post.userId) {
      res.locals.post = post;
      return next();
    }
    return next({
      type: 'UNAUTHORIZED_USER',
      message: 'Unauthorized user',
    });
};