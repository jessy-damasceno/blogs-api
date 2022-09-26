module.exports = async (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({ type: 'FIELD_REQUIRED', message: 'Some required fields are missing' });
  }

  next();
};