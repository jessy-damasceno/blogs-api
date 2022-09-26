const { createUser } = require('../services/user.service');

const postUser = async (req, res) => {
  const token = await createUser(req.body);
  res.status(201).json({ token });
};

module.exports = {
  postUser,
};