import { useState, useEffect, useCallback } from 'react';
import { getCampsites, getUserPassports, getVisitHistory } from '../services/api';

const useApi = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCampsites = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCampsites();
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPassports = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUserPassports();
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchVisitHistory = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getVisitHistory();
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    fetchCampsites,
    fetchPassports,
    fetchVisitHistory
  };
};

export default useApi;