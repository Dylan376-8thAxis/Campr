import React from 'react';

interface ProgressTrackerProps {
  progress?: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress = 0 }) => {
  const progressPercentage = `${Math.min(Math.max(progress, 0), 100)}%`;

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <div className="progress-container" style={{ 
        width: '100%', 
        height: '20px', 
        backgroundColor: '#e0e0e0', 
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div 
          className="progress-bar" 
          style={{ 
            width: progressPercentage,
            height: '100%',
            backgroundColor: '#4CAF50',
            transition: 'width 0.3s ease'
          }}
        >
          {progress > 0 && <span style={{ padding: '0 10px', color: 'white' }}>{progressPercentage}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;