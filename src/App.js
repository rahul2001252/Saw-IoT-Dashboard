import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import MachineDetails from './MachineDetails';

function App() {
  return (
    <Router>
    <div className='app'>
     <Dashboard />
     <div className="conent">
      <Routes>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/machinedetails" exact component={MachineDetails} />
      </Routes>
     </div>
    </div>
      
    </Router>
  );
}

export default App;
