import express from 'express';
import { getCampsites, getCampsiteById, createCampsite, updateCampsite, deleteCampsite } from '../controllers/campsiteController';

const router = express.Router();

// Route to get all campsites
router.get('/', getCampsites);

// Route to get a specific campsite by ID
router.get('/:id', getCampsiteById);

// Route to create a new campsite
router.post('/', createCampsite);

// Route to update an existing campsite
router.put('/:id', updateCampsite);

// Route to delete a campsite
router.delete('/:id', deleteCampsite);

export default router;