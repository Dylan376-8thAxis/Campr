import React, { useState } from 'react';

const CampsiteSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Replace with your API endpoint
    const response = await fetch(`/api/campsites?search=${searchTerm}`);
    const data = await response.json();
    setResults(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="campsite-search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for campsites..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {results.map((campsite) => (
          <div key={campsite.id} className="campsite-result">
            <h3>{campsite.name}</h3>
            <p>{campsite.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampsiteSearch;