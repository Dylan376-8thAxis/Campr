import React from 'react';
import { Passport } from '../../types/passport';
import PassportCard from './PassportCard';

interface PassportListProps {
  passports?: Passport[];
}

const PassportList: React.FC<PassportListProps> = ({ passports = [] }) => {
  if (passports.length === 0) {
    return (
      <div className="passport-list-empty">
        <p>No passports yet. Start exploring campsites to create your first passport!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Passport List</h2>
      <div className="passport-list">
        {passports.map(passport => (
          <PassportCard key={passport.id} passport={passport} />
        ))}
      </div>
    </div>
  );
};

export default PassportList;
export { PassportList };