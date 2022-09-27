const { validateNewPost } = require('../validations/validations');

module.exports = (req, _res, next) => {
  const error = validateNewPost(req.body);

  if (error.type) {
    next(error);
  }
  next();
};
