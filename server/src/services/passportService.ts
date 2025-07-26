import { Passport } from '../models/Passport';
import { User } from '../models/User';
import { Visit } from '../models/Visit';

export const createPassport = async (userId: string, passportData: any) => {
  const passport = new Passport({ user: userId, ...passportData });
  return await passport.save();
};

export const getPassportsByUser = async (userId: string) => {
  return await Passport.find({ user: userId });
};

export const getPassportById = async (passportId: string) => {
  return await Passport.findById(passportId).populate('user');
};

export const updatePassport = async (passportId: string, updateData: any) => {
  return await Passport.findByIdAndUpdate(passportId, updateData, { new: true });
};

export const deletePassport = async (passportId: string) => {
  return await Passport.findByIdAndDelete(passportId);
};

export const logVisitToPassport = async (passportId: string, visitData: any) => {
  const visit = new Visit(visitData);
  await visit.save();
  return await Passport.findByIdAndUpdate(passportId, { $push: { visits: visit._id } }, { new: true });
};