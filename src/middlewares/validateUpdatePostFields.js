const { validateUpdatePost } = require('../validations/validations');

module.exports = (req, _res, next) => {
  const error = validateUpdatePost(req.body);

  if (error.type) {
    next(error);
  }
  next();
};