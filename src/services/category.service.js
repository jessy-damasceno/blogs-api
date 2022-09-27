const { Category } = require('../models');

const isCategoriesVerify = async (payload) => {
  const categoriesList = await Promise
    .all(payload.map((id) => Category.findByPk(id)));

  const isCategories = categoriesList.every((e) => e !== null);

  return isCategories;
};

const createCategory = async (payload) => {
  const newCategory = await Category.create(payload);

  return newCategory;
};

const findAll = () => Category.findAll({ attributes: { exclude: ['password'] } }) || [];

module.exports = {
  isCategoriesVerify,
  createCategory,
  findAll,
};