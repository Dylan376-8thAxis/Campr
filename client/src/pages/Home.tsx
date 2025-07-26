import React from 'react';
import Navigation from '../components/common/Navigation';

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main className="container">
        <h1>Welcome to the Digital Campsite Passport</h1>
        <p>Your adventure starts here! Explore campsites, log your visits, and earn rewards.</p>
        <div className="home-actions">
          <a href="/campsites" className="button">Explore Campsites</a>
          <a href="/login" className="button">Get Started</a>
        </div>
      </main>
    </div>
  );
};

export default Home;