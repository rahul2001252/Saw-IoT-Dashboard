import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Sidebar.css';
import logo from './assets/emmetrics-logo (1).png';
import Divider from '@mui/material/Divider';

import { FaHome, FaCogs, FaBook, FaInfo, FaBriefcase, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons

function Sidebar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="Sidebar">
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>

        <Link id='link' to="/dashboard" onClick={() => setActiveTab('/dashboard')}>
          <li className={activeTab === '/dashboard' ? 'active' : ''}>
            <FaHome /> Dashboard
          </li>
        </Link>
        <Link id='link' to="/machinedetails" onClick={() => setActiveTab('/machinedetails')}>
          <li className={activeTab === '/machinedetails' ? 'active' : ''}>
            <FaInfo /> Machine details
          </li>
        </Link>
        <Link id='link' to="/controller" onClick={() => setActiveTab('/controller')}>
          <li className={activeTab === '/controller' ? 'active' : ''}>
            <FaCogs /> Controller
          </li>
        </Link>
        <Divider />
        <li>
          <FaBook /> Material Library
        </li>
        <li>
          <FaBriefcase /> Job Library
        </li>
        <Divider />
        <Link id='link' to="/" onClick={() => setActiveTab('/')}>
          <li className={activeTab === '/' ? 'active' : ''}>
            <FaSignOutAlt /> <b>Log Out</b>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
