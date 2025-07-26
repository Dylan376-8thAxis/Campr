import React from 'react';
import { Passport } from '../../types/passport';

interface PassportCardProps {
  passport: Passport;
}

const PassportCard: React.FC<PassportCardProps> = ({ passport }) => {
  return (
    <div className="passport-card">
      <h2>Passport #{passport.id}</h2>
      <p>Campsite ID: {passport.campsiteId}</p>
      <p>Visit Date: {new Date(passport.visitDate).toLocaleDateString()}</p>
      <p>Status: {passport.status}</p>
      <p>Created: {new Date(passport.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PassportCard;