const { findById } = require('../services/blogPost.service');

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const post = await findById(id);

  if (!post) {
    return next({ type: 'NOT_FOUND', message: 'Post does not exist' });
  }
  return next();
};