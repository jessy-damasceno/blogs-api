const { getByEmailAndPassword } = require('../services/user.service');

module.exports = async (req, _res, next) => {
  const user = await getByEmailAndPassword(req.body);

  if (user) {
    next();
  }
  next({ type: 'INVALID_FIELD', message: 'Invalid fields' });
};
