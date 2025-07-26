import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // You can replace 'any' with your user type
    }
  }
}

export {};