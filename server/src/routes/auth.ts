import express from 'express';
import { login, signup } from '../controllers/authController';
import { validateSignup, validateLogin } from '../middleware/validation';

const router = express.Router();

// Route for user signup
router.post('/signup', validateSignup, signup);

// Route for user login
router.post('/login', validateLogin, login);

export default router;