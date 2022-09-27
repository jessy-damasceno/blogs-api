require('dotenv/config');
const jwt = require('jsonwebtoken');
const { getByEmail } = require('../services/user.service');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    next({
      type: 'TOKEN_ERROR',
      message: 'Token not found',
    });
  }

  try {
    const { email } = jwt.verify(token, secret);
    const user = await getByEmail(email);

    if (!user) {
      next({ type: 'TOKEN_ERROR', message: 'Expired or invalid token' });
    }
    res.locals.user = user.dataValues; // User info between middlewares
    next();
  } catch (err) {
    next({ type: 'TOKEN_ERROR', message: 'Expired or invalid token' });
  }
};
