import React, { useState } from 'react';

interface UserSettingsProps {
  userId: string;
}

export const UserSettings: React.FC<UserSettingsProps> = ({ userId }) => {
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('public');

  return (
    <div className="user-settings card">
      <h3>Settings</h3>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable notifications
        </label>
      </div>
      <div className="setting-item">
        <label>
          Privacy Level:
          <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </label>
      </div>
    </div>
  );
};
);

export const UserSettings: React.FC<UserSettingsProps> = ({ userId }) => {
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('public');

  return (
    <div className="user-settings">
      <h3>Settings</h3>
      <NotificationSettings
        notifications={notifications}
        setNotifications={setNotifications}
      />
      <PrivacySettings privacy={privacy} setPrivacy={setPrivacy} />
    </div>
  );
};
