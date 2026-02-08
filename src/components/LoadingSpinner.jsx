import React from 'react';
import './Style/LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading packages...</p>
        </div>
    );
};

export default LoadingSpinner;