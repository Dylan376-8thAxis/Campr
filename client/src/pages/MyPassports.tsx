import React, { useEffect, useState } from 'react';
import { getUserPassports } from '../services/api';
import PassportList from '../components/passport/PassportList';
import LoadingSpinner from '../components/common/LoadingSpinner';

const MyPassports: React.FC = () => {
  const [passports, setPassports] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPassports = async () => {
      try {
        const data = await getUserPassports();
        setPassports(data);
      } catch (err) {
        setError('Failed to load passports');
      } finally {
        setLoading(false);
      }
    };

    fetchPassports();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>My Passports</h1>
      <PassportList passports={passports} />
    </div>
  );
};

export default MyPassports;