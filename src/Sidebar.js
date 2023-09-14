import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './assets/download.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Sidebar">
      <div className="Logo">
       
        <img src={logo} alt="Logo" />

      </div>
      <ul>
        <li>Overview</li>
        <li>Machine details</li>
        <li>Controller</li>
        <li>Material Library</li>
        <li>Job Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
