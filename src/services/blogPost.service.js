const { BlogPost } = require('../models');

const createPost = async ({ title, content, userId }) => {
  const newPost = await BlogPost.create({ title, content, userId });

  return newPost;
};

module.exports = {
  createPost,
};
