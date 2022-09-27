const errorMap = {
  FIELD_REQUIRED: 400,
  INVALID_FIELD: 400,
  ALREADY_REGISTERED: 409,
  TOKEN_ERROR: 401,
  NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};