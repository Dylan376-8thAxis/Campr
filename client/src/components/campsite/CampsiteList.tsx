import React, { useEffect, useState } from 'react';
import { Campsite } from '../../types/campsite';
import { getCampsites } from '../../services/api';
import CampsiteCard from './CampsiteCard';

const CampsiteList: React.FC = () => {
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="campsite-list">
      {campsites.map(campsite => (
        <CampsiteCard key={campsite.id} campsite={campsite} />
      ))}
    </div>
  );
};

export default CampsiteList;
export { CampsiteList };