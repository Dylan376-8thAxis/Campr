import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserProfile } from '../components/Profile/UserProfile';
import { UserSettings } from '../components/Profile/UserSettings';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      {user ? (
        <>
          <UserProfile user={user} />
          <UserSettings userId={user.id} />
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;