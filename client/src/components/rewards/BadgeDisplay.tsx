import React from 'react';

interface Badge {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface BadgeDisplayProps {
  badges?: Badge[];
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badges = [] }) => {
  return (
    <div className="badge-display">
      <h2>Earned Badges</h2>
      <div className="badge-list">
        {badges.length > 0 ? (
          badges.map((badge) => (
            <div key={badge.id} className="badge-item">
              <img src={badge.imageUrl} alt={badge.name} className="badge-image" />
              <h3>{badge.name}</h3>
              <p>{badge.description}</p>
            </div>
          ))
        ) : (
          <p>No badges earned yet. Start camping to earn your first badge!</p>
        )}
      </div>
    </div>
  );
};

export default BadgeDisplay;
export { BadgeDisplay };