import React, { useEffect, useState } from 'react';
import { getVisitHistory } from '../../services/api';
import { Visit } from '../../types/visit';

const VisitHistory: React.FC = () => {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitHistory = async () => {
      try {
        const data = await getVisitHistory();
        setVisits(data);
      } catch (err) {
        setError('Failed to fetch visit history');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Visit History</h2>
      {visits.length === 0 ? (
        <p>No visits recorded yet. Start exploring campsites!</p>
      ) : (
        <ul>
          {visits.map((visit) => (
            <li key={visit.id}>
              <p>Date: {visit.date}</p>
              <p>Campsite: {visit.campsiteName}</p>
              <p>Notes: {visit.notes}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisitHistory;
export { VisitHistory };