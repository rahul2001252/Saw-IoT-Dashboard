import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './assets/download (1).png';
import useStyles from './SidebarStyles';

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={`Sidebar ${classes.Sidebar}`}>
      <div className={`Logo ${classes.Logo}`}>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <Link to="/dashboard" className={classes.Link}>
          <li>Dashboard</li>
        </Link>
        <Link to="/machinedetails" className={classes.Link}>
          <li>Machine details</li>
        </Link>
        <Link to="/controller" className={classes.Link}>
          <li>Controller</li>
        </Link>
        <li>Material Library</li>
        <li>Job Library</li>
        <Link to="/" className={classes.Logout}>
          <li><b>Log Out</b></li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
