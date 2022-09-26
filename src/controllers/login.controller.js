const tokenGenerator = require('../utils/tokenGenerator');

const postLogin = (req, res) => {
  const { email } = req.body;
  const token = tokenGenerator(email);
  res.status(200).json({ token });
};

module.exports = {
  postLogin,
};
