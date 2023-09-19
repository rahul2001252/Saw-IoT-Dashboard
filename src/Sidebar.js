import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import logo from './assets/download (1).png';

function Sidebar(){
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
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/machinedetails"><li>Machine details</li></Link>
        <li>Controller</li>
        <li>Material Library</li>
        <li>Job Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
