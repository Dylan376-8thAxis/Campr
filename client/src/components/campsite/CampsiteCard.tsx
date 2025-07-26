import React from 'react';
import { Campsite } from '../../types/campsite';

interface CampsiteCardProps {
  campsite: Campsite;
}

const CampsiteCard: React.FC<CampsiteCardProps> = ({ campsite }) => {
  return (
    <div className="campsite-card">
      <h3>{campsite.name}</h3>
      <p>{campsite.description}</p>
      <p>Rating: {campsite.rating}/5</p>
      {campsite.images && campsite.images.length > 0 && (
        <img src={campsite.images[0]} alt={campsite.name} className="campsite-image" />
      )}
      <div className="campsite-amenities">
        {campsite.amenities.map((amenity, index) => (
          <span key={index} className="amenity-tag">{amenity}</span>
        ))}
      </div>
    </div>
  );
};

export default CampsiteCard;
export { CampsiteCard };