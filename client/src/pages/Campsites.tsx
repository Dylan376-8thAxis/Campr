import React, { useEffect, useState } from 'react';
import { getCampsites } from '../services/api';
import { Campsite } from '../types/campsite';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Campsites: React.FC = () => {
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampsites = async () => {
      try {
        const data = await getCampsites();
        setCampsites(data);
      } catch (err) {
        setError('Failed to fetch campsites');
      } finally {
        setLoading(false);
      }
    };

    fetchCampsites();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Campsites</h1>
      <div className="campsite-list">
        {campsites.map(campsite => (
          <div key={campsite.id} className="campsite-card">
            <h3>{campsite.name}</h3>
            <p>{campsite.description}</p>
            <p>Rating: {campsite.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campsites;