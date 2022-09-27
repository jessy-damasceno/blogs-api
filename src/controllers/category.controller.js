const { createCategory } = require('../services/category.service');

const postCategory = async (req, res) => {
  const category = await createCategory(req.body);

  return res.status(201).json(category);
};

module.exports = {
  postCategory,
};
