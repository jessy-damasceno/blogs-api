const { getByEmail } = require('../services/user.service');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const user = await getByEmail(email);

  if (user) {
    next({ type: 'ALREADY_REGISTERED', message: 'User already registered' });
  }
  next();
};
