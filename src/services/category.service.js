const { Category } = require('../models');

const createCategory = async (payload) => {
  const newCategory = await Category.create(payload);

  return newCategory;
};

module.exports = {
  createCategory,
};