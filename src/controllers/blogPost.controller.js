const { insert } = require('../services/blogPost.service');

const postBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = res.locals.user;
  const newPost = await insert({ title, content, userId: id, categoryIds });

  return res.status(201).json(newPost);
};

module.exports = {
  postBlogPost,
};
