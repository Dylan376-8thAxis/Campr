import React, { useState } from 'react';

const CheckInForm = () => {
  const [campsiteId, setCampsiteId] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!campsiteId || !visitorName || !checkInDate) {
      setError('All fields are required');
      return;
    }
    setError('');
    // Handle check-in logic here, e.g., API call
    console.log('Check-in successful:', { campsiteId, visitorName, checkInDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Check In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="campsiteId">Campsite ID:</label>
        <input
          type="text"
          id="campsiteId"
          value={campsiteId}
          onChange={(e) => setCampsiteId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="visitorName">Visitor Name:</label>
        <input
          type="text"
          id="visitorName"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="checkInDate">Check-In Date:</label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <button type="submit">Check In</button>
    </form>
  );
};

export default CheckInForm;