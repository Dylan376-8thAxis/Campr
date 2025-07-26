import { Request, Response } from 'express';
import Visit from '../models/Visit';

// Log a visit to a campsite
export const logVisit = async (req: Request, res: Response) => {
  try {
    const visitData = req.body;
    const newVisit = new Visit(visitData);
    await newVisit.save();
    res.status(201).json(newVisit);
  } catch (error) {
    res.status(500).json({ message: 'Error logging visit', error });
  }
};

// Get visit history for a user
export const getVisitHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const visits = await Visit.find({ userId }).populate('campsiteId');
    res.status(200).json(visits);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving visit history', error });
  }
};

// Check in to a campsite
export const checkIn = async (req: Request, res: Response) => {
  try {
    const { userId, campsiteId } = req.body;
    const visit = new Visit({ userId, campsiteId, checkInTime: new Date() });
    await visit.save();
    res.status(201).json(visit);
  } catch (error) {
    res.status(500).json({ message: 'Error checking in', error });
  }
};