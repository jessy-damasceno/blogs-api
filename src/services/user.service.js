const { User } = require('../models');

const getByEmailAndPassword = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: {
      exclude: ['password', 'image'],
    },
  });

  return user;
};

module.exports = {
  getByEmailAndPassword,
};