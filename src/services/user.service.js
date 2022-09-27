const { User } = require('../models');
const tokenGenerator = require('../utils/tokenGenerator');

const getByEmailAndPassword = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: {
      exclude: ['password', 'image'],
    },
  });

  return user;
};

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: {
      exclude: ['password', 'image'],
    },
  });

  return user;
};

const createUser = async (payload) => {
  const newUser = await User.create(payload);

  const token = tokenGenerator(newUser.email);

  return token;
};

const findAll = () => User.findAll({ attributes: { exclude: ['password'] } }) || [];

module.exports = {
  getByEmailAndPassword,
  getByEmail,
  createUser,
  findAll,
};