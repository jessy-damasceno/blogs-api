const { createCategory, findAll } = require('../services/category.service');

const postCategory = async (req, res) => {
  const category = await createCategory(req.body);

  return res.status(201).json(category);
};

const getCategory = async (_req, res) => {
  const categoriesList = await findAll();

  return res.status(200).json(categoriesList);
};

module.exports = {
  postCategory,
  getCategory,
};
