const { insert, findAll } = require('../services/blogPost.service');

const postBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = res.locals.user;
  const newPost = await insert({ title, content, userId: id, categoryIds });

  return res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const postsList = await findAll();

  return res.status(200).json(postsList);
};

module.exports = {
  postBlogPost,
  getAllPosts,
};
