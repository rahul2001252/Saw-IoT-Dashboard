// StatusButton.js
import React, { useState } from 'react';
import './styles/StatusButton.css'; 

const StatusButton = () => {
  const [status, setStatus] = useState('Cutting'); // Initial status

  const toggleStatus = () => {
    // Toggle between 'default' and 'success' statuses
    setStatus(status === 'default' ? 'success' : 'default');
  };

  return (
    <button
      className={`status-button ${status === 'Cutting' ? 'Cutting' : 'Not-Cutting'}`}
      onClick={toggleStatus}
    >
      {status === 'Cutting' ? 'Cutting' : 'Not Cutting'} 
    </button>
  );
};

export default StatusButton;
