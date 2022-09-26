const errorMap = {
  FIELD_REQUIRED: 400,
  INVALID_FIELD: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};