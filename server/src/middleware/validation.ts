import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

const validateUserSignup = [
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateUserLogin = [
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isString().notEmpty().withMessage('Password is required'),
];

const validateCampsiteCreation = [
  body('name').isString().notEmpty().withMessage('Campsite name is required'),
  body('location').isString().notEmpty().withMessage('Location is required'),
  body('description').isString().optional(),
];

const validatePassportCreation = [
  body('passportNumber').isString().notEmpty().withMessage('Passport number is required'),
  body('userId').isString().notEmpty().withMessage('User ID is required'),
];

const validateVisitLog = [
  body('campsiteId').isString().notEmpty().withMessage('Campsite ID is required'),
  body('visitDate').isDate().withMessage('Visit date is required'),
];

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export {
  validateUserSignup,
  validateUserLogin,
  validateCampsiteCreation,
  validatePassportCreation,
  validateVisitLog,
  validateRequest,
};