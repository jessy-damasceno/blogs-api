const { getByEmailAndPassword } = require('../services/user.service');

module.exports = async (req, _res, next) => {
  const user = await getByEmailAndPassword(req.body);
  console.log(user);
  if (user) {
    next();
  }
  next({ type: 'INVALID_FIELD', message: 'Invalid fields' });
};
