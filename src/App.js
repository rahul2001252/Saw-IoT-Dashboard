import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login  from './Login';
import MachineDetails from './MachineDetails';
import Controller from './Controller';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/machinedetails" element={<MachineDetails />} />
        <Route path="/controller" element={<Controller />} />
      </Routes>
    </div>
      
  );
}

export default App;
