const { mapError } = require('../utils/errorMap');

module.exports = (err, _req, res, _next) => {
  const { type, message } = err;
  return res.status(mapError(type)).json({ message });
};