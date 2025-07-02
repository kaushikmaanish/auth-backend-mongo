const { check } = require('express-validator');

exports.signupValidator = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
];

exports.loginValidator = [
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password is required').exists()
];
