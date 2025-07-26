import React, { useState } from 'react';

const VisitLogger: React.FC = () => {
  const [campsiteId, setCampsiteId] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to log the visit (e.g., API call)
    console.log('Visit logged:', { campsiteId, visitDate, notes });
  };

  return (
    <div>
      <h2>Log a Visit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="campsiteId">Campsite ID:</label>
          <input
            type="text"
            id="campsiteId"
            value={campsiteId}
            onChange={(e) => setCampsiteId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="visitDate">Visit Date:</label>
          <input
            type="date"
            id="visitDate"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button type="submit">Log Visit</button>
      </form>
    </div>
  );
};

export default VisitLogger;