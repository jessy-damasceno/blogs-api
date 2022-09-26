const Joi = require('joi');

const addUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  addUserSchema,
};