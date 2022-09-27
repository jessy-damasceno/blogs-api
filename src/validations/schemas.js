const Joi = require('joi');

const addUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const blogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().required()),
});

module.exports = {
  addUserSchema,
  categorySchema,
  blogPostSchema,
};