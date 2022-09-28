const {
  addUserSchema,
  categorySchema,
  blogPostSchema,
  updateBlogPostSchema,
} = require('./schemas');

const validateNewUser = (payload) => {
  const { error } = addUserSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: error.details[0].message,
    }; 
  }
  return { type: null };
};

const validateNewCategory = (payload) => {
  const { error } = categorySchema.validate(payload);

  if (error) {
    return {
      type: 'FIELD_REQUIRED',
      message: error.details[0].message,
    }; 
  }
  return { type: null };
};

const validateNewPost = (payload) => {
  const { error } = blogPostSchema.validate(payload);

  if (error) {
    return {
      type: 'FIELD_REQUIRED',
      message: 'Some required fields are missing',
    }; 
  }
  return { type: null };
};

const validateUpdatePost = (payload) => {
  const { error } = updateBlogPostSchema.validate(payload);

  if (error) {
    return {
      type: 'FIELD_REQUIRED',
      message: 'Some required fields are missing',
    }; 
  }
  return { type: null };
};

module.exports = {
  validateNewUser,
  validateNewCategory,
  validateNewPost,
  validateUpdatePost,
};
