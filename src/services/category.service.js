const { Category } = require('../models');

const createCategory = async (payload) => {
  const newCategory = await Category.create(payload);

  return newCategory;
};

const findAll = () => Category.findAll({ attributes: { exclude: ['password'] } }) || [];

module.exports = {
  createCategory,
  findAll,
};