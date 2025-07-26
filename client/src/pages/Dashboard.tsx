import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Welcome{user?.username ? `, ${user.username}` : ''}!</h1>
      <section>
        <h2>Your Dashboard</h2>
        <p>This is your camping dashboard. Features coming soon!</p>
      </section>
    </div>
  );
};

export default Dashboard;