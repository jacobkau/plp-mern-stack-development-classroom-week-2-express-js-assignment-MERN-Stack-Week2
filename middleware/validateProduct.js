const { ValidationError } = require('../utils/customErrors');

module.exports = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    throw new ValidationError('Product name is required and must be a string.');
  }
  if (typeof price !== 'number' || price < 0) {
    throw new ValidationError('Product price must be a positive number.');
  }
  next();
};