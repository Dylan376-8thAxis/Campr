import React from 'react';
import BadgeDisplay from '../components/rewards/BadgeDisplay';
import RewardsList from '../components/rewards/RewardsList';
import ProgressTracker from '../components/rewards/ProgressTracker';

const Rewards: React.FC = () => {
  return (
    <div className="rewards-page">
      <h1>Your Rewards</h1>
      <BadgeDisplay />
      <ProgressTracker />
      <RewardsList />
    </div>
  );
};

export default Rewards;