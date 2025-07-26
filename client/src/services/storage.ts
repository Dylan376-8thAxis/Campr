import { useState } from 'react';

const STORAGE_KEY = 'digitalCampsitePassport';

export const useLocalStorage = <T>(defaultValue: T | null = null) => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEY);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setValue = (value: T | null | ((val: T | null) => T | null)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (valueToStore !== null) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(valueToStore));
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(null);
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error(error);
    }
  };

  return { storedValue, setValue, removeValue };
};