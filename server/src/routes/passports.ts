import express from 'express';
import passportController from '../controllers/passportController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Get all passports
router.get('/', authenticate, passportController.getAllPassports);

// Get a specific passport by ID
router.get('/:id', authenticate, passportController.getPassportById);

// Create a new passport
router.post('/', authenticate, passportController.createPassport);

// Update an existing passport
router.put('/:id', authenticate, passportController.updatePassport);

// Delete a passport
router.delete('/:id', authenticate, passportController.deletePassport);

export default router;