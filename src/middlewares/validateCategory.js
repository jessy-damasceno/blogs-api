const { validateNewCategory } = require('../validations/validations');

module.exports = (req, _res, next) => {
  const error = validateNewCategory(req.body);

  if (error.type) {
    next(error);
  }
  next();
};
