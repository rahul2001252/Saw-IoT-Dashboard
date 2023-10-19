import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './Dashboard';
import Login  from './components/Login';
import MachineDetails from './MachineDetails';
import Controller from './Controller';
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
