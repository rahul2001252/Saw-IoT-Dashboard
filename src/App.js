import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from 'react-apexcharts';
import DonutChart from './Charts/DonutChart';
import MiniDonut from './Charts/MiniDonut';
import Sidebar from './Sidebar';
import Home from './Home';
import Charts from './Charts/Charts';
import Dashboard from './Dashboard';
import Login from './Login';
import MachineDetails from './MachineDetails';
import BarChart from './Charts/Barchart';
import LineChart from './Charts/Linechart';

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
