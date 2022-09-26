const errorMap = {
  FIELD_REQUIRED: 400,
  INVALID_FIELD: 400,
  ALREADY_REGISTERED: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};