import React from 'react';
import { User } from '../../types/auth';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile card">
      <div className="profile-header">
        {user.profilePhoto && (
          <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
        )}
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
      <div className="profile-details">
        {user.fullName && (
          <p>Name: {user.fullName.firstName} {user.fullName.lastName}</p>
        )}
        <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
