import { body, validationResult } from 'express-validator';

export const validateUserSignup = [
  body('username')
    .isString()
    .withMessage('Username must be a string')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  body('email')
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('password')
    .isString()
    .withMessage('Password must be a string')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

export const validateUserLogin = [
  body('email')
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('password')
    .isString()
    .withMessage('Password must be a string'),
];

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};