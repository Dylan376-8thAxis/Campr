import express from 'express';
import { logVisit, getVisitHistory } from '../controllers/visitController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Route to log a visit
router.post('/', authenticate, logVisit);

// Route to get visit history
router.get('/:userId', authenticate, getVisitHistory);

export default router;