const Sequelize = require('sequelize');
const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

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
    console.log('postId         ', newPost.id);
    console.log('categoryIds         ', categoryIds);
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

module.exports = {
  createPost,
  insert,
};
