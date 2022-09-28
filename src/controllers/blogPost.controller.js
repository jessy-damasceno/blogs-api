const { insert, findAll, findById, update } = require('../services/blogPost.service');

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

const getPostById = async (req, res) => {
  const post = await findById(req.params.id);

  if (post) {
    return res.status(200).json(post);
  }
  return res.status(404).json({ message: 'Post does not exist' });
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const post = await update({ id, title, content });
  
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postBlogPost,
  getAllPosts,
  getPostById,
  updatePostById,
};
