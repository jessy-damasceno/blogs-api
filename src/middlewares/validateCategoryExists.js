const { isCategoriesVerify } = require('../services/category.service');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  const isCategories = await isCategoriesVerify(categoryIds);

  if (isCategories) {
    return next();
  }
  return next({
    type: 'INVALID_FIELD',
    message: '"categoryIds" not found',
  });
};
