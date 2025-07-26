import { Request, Response } from 'express';
import passportService from '../services/passportService';
import { Passport } from '../models/Passport';

// Create a new passport
export const createPassport = async (req: Request, res: Response) => {
  try {
    const passportData: Passport = req.body;
    const newPassport = await passportService.createPassport(passportData);
    res.status(201).json(newPassport);
  } catch (error) {
    res.status(500).json({ message: 'Error creating passport', error });
  }
};

// Get all passports
export const getAllPassports = async (req: Request, res: Response) => {
  try {
    const passports = await passportService.getAllPassports();
    res.status(200).json(passports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching passports', error });
  }
};

// Get passport by ID
export const getPassportById = async (req: Request, res: Response) => {
  try {
    const passportId = req.params.id;
    const passport = await passportService.getPassportById(passportId);
    if (!passport) {
      return res.status(404).json({ message: 'Passport not found' });
    }
    res.status(200).json(passport);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching passport', error });
  }
};

// Update passport
export const updatePassport = async (req: Request, res: Response) => {
  try {
    const passportId = req.params.id;
    const passportData: Passport = req.body;
    const updatedPassport = await passportService.updatePassport(passportId, passportData);
    if (!updatedPassport) {
      return res.status(404).json({ message: 'Passport not found' });
    }
    res.status(200).json(updatedPassport);
  } catch (error) {
    res.status(500).json({ message: 'Error updating passport', error });
  }
};

// Delete passport
export const deletePassport = async (req: Request, res: Response) => {
  try {
    const passportId = req.params.id;
    const deletedPassport = await passportService.deletePassport(passportId);
    if (!deletedPassport) {
      return res.status(404).json({ message: 'Passport not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting passport', error });
  }
};