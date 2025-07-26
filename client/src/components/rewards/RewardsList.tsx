import React from 'react';

const RewardsList: React.FC = () => {
  const rewards = [
    { id: 1, name: 'Camping Gear Discount', description: 'Get 20% off on camping gear.' },
    { id: 2, name: 'Free Camping Night', description: 'Enjoy a free night at any campsite.' },
    { id: 3, name: 'Exclusive Badge', description: 'Earn a special badge for your passport.' },
  ];

  return (
    <div className="rewards-list">
      <h2>Available Rewards</h2>
      <ul>
        {rewards.map(reward => (
          <li key={reward.id}>
            <h3>{reward.name}</h3>
            <p>{reward.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsList;