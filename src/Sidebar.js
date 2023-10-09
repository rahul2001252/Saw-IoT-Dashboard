import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import logo from './assets/download (1).png';

function Sidebar(){
  return (
    <div className="Sidebar">
      <div className="Logo">
       
        <img src={logo} alt="Logo" />

      </div>
      <ul>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/machinedetails"><li>Machine details</li></Link>
        <Link to="/controller"><li>Controller</li></Link>
        <li>Material Library</li>
        <li>Job Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
