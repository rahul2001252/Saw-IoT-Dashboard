import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import DonutApp from './Charts/DonutApp';
import MiniDonut from './Charts/MiniDonut';
import LineApp from './Charts/LineApp';
import Sidebar from './Sidebar';
import Home from './Home';
import BarChart from './Charts/Barchart';
import StatusButton from './StatusButton';

const Dashboard = () => {
    return (
          <div className="App">
            <Sidebar />
            <div className='content'>
              <Routes>
                <Route path="/" exact component={Dashboard}/>
                <Route path="./Home" exact component={Home}/>
              </Routes>
            </div>
            <h1>Overview</h1>
            <div class="upper-page">
              <div class="machine-status-buttons">
              <h2>Saw Status</h2>
              <div id="status-btn">
              <div id="statusbtn"><StatusButton /><h4></h4></div>
              <div id="statusbtn"><StatusButton /></div>
              <div id="statusbtn"><StatusButton /></div>
              </div>
              <div id="status-btn">
              <div id="statusbtn"><StatusButton /></div>
              <div id="statusbtn"><StatusButton /></div>
              <div id="statusbtn"><StatusButton /></div>
              </div>
              </div>
              <div class="overall-saw-status">
                <h2>Overall Saw Status</h2>
                <div class="donutgp">
                  <DonutApp />
                </div> 
              </div>
            </div>
            <div class="line-container">
             <div class="saw-pos">
               <h2>Saw Position</h2>
                <div name="rhs">
                 <LineApp />
                </div>
              </div>
            </div>
            

            
            <div class="mini-container">
              <div class="donut-box">
              <div className="flex-contianer">
              <div class="saw-name">
              <h2>Individual Saw Status</h2>
              <div id="flex-item">
                <div id ="donut"><h2>Saw 1</h2><MiniDonut /></div>    
                <div id ="donut"><h2>Saw 2</h2><MiniDonut /></div>
                <div id ="donut"><h2>Saw 3</h2><MiniDonut /></div>
              </div>
              <div id="flex-item">
                <div id ="donut"><h2>Saw 4</h2><MiniDonut /></div>
                <div id ="donut"><h2>Saw 5</h2><MiniDonut /></div>
                <div id ="donut"><h2>Saw 6</h2><MiniDonut /></div>
              </div>
              </div>
                
              </div>
              </div>
            </div>
            <div class="bar">
              <div class="bar-box">
                <h2>Overall Job Status</h2>
                <div class="bar-chart">
                <BarChart />
                </div>
              </div>
            </div>
                        
            
            
            
            
            <div className="content">
              <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/charts" component={DonutApp} />
              </Routes>
            </div>
          </div>
      );
    }

export default Dashboard;