import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Digital Campsite Passport</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/campsites">Campsites</Link></li>
          <li><Link to="/mypassports">My Passports</Link></li>
          <li><Link to="/rewards">Rewards</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;