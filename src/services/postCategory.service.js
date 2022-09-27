const { PostCategory } = require('../models');

const insert = async ({ postId, categoryId }) => {
  const newPostCategory = await PostCategory.create({ postId, categoryId });

  return newPostCategory;
};

module.exports = {
  insert,
};
