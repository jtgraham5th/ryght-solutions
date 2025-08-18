import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'primary', 
  text = 'Loading...', 
  fullScreen = false,
  className = '' 
}) => {
  const spinner = (
    <div className={`loading-spinner ${className}`}>
      <Spinner 
        animation="border" 
        variant={variant} 
        size={size}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <div className="loading-text mt-2">
          {text}
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="loading-spinner-fullscreen">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
