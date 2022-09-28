const Sequelize = require('sequelize');
const { BlogPost } = require('../models');
const { PostCategory, User, Category } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const createPost = async ({ title, content, userId }) => {
  const newPost = await BlogPost.create({ title, content, userId });

  return newPost;
};

const insert = async ({ title, content, userId, categoryIds }) => {
  const t = await sequelize.transaction();

  try {
    const newPost = await BlogPost.create(
      { title, content, userId },
      { transaction: t },
    );

    await Promise.all(
      categoryIds.map((categoryId) =>
      PostCategory.create({ postId: newPost.id, categoryId }, { transaction: t })),
    );
    await t.commit();
    return newPost;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

const findAll = () => BlogPost.findAll({ include: [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories' },
] });

const findById = (id) => BlogPost.findByPk(id, { include: [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories' },
] });

const update = async ({ id, title, content }) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const postUpdated = await findById(id);

  return postUpdated;
};

module.exports = {
  createPost,
  insert,
  findAll,
  findById,
  update,
};