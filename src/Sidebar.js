import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './styles/Sidebar.css';
import logo from './assets/emmetrics-logo (1).png';

function Sidebar(){
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  
  return (
    <div className="Sidebar">
      <div className="Logo">
       
        <img src={logo} alt="Logo" />

      </div>
      <ul>
        <Link id='link' to="/dashboard" onClick={() => setActiveTab('/dashboard')}>
          <li className={activeTab === '/dashboard' ? 'active': ''}>Dashboard</li></Link>
        <Link id ='link' to="/machinedetails" onClick={() => setActiveTab('/machinedetails')}>
          <li className={activeTab === '/machinedetails' ? 'active': ''}>Machine details</li></Link>
        <Link id ='link' to="/controller" onClick={() => setActiveTab('/controller')}>
          <li className={activeTab === '/controller' ? 'active': ''}>Controller</li></Link>
        <li>Material Library</li>
        <li>Job Library</li>
        <Link id ='link' to="/" onClick={() =>setActiveTab('/')}>
          <li className={activeTab === '/' ? 'active':''}><b>Log Out</b></li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;