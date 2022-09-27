const { createUser, findAll } = require('../services/user.service');

const postUser = async (req, res) => {
  const token = await createUser(req.body);
  res.status(201).json({ token });
};

const getUser = async (_req, res) => {
  const users = await findAll();

  return res.status(200).json(users);
};

module.exports = {
  postUser,
  getUser,
};