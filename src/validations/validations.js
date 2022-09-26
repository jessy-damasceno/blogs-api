const { addUserSchema } = require('./schemas');

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

module.exports = {
  validateNewUser,
};
