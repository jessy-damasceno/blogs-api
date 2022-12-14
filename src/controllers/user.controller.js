const { createUser, findAll, findByPk } = require('../services/user.service');
const { mapError } = require('../utils/errorMap');
const { User } = require('../models');

const postUser = async (req, res) => {
  const token = await createUser(req.body);
  res.status(201).json({ token });
};

const getUser = async (_req, res) => {
  const users = await findAll();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await findByPk(id);

  if (!type) {
    return res.status(200).json(message);
  }
  return res.status(mapError(type)).json({ message });
};

const deleteMe = async (req, res) => {
  const { id } = res.locals.user;
  await User.destroy({ where: { id } });
  return res.status(204).end();
};

module.exports = {
  postUser,
  getUser,
  getUserById,
  deleteMe,
};