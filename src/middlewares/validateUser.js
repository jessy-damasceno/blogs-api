const { validateNewUser } = require('../validations/validations');

module.exports = (req, _res, next) => {
  const error = validateNewUser(req.body);

  if (error.type) {
    next(error);
  }
  next();
};
