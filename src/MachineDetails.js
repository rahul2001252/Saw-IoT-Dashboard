import React from 'react';
import Sidebar from './Sidebar';
import StatusButton from './StatusButton';
import './MachineDetails.css';
import SawPositionChart from './Charts/SawPositionChart';
import machineimg from './assets/DC22A HemSaW.png';

function MachineDetails() {
  return (
    <div className="machine-main">
        <div class="Sidebar">
         <Sidebar />
        </div>
        <div class="left-container">
            <div class="machine-image">
            <h2>SmartSaw DC22A</h2>
            <img src={machineimg} alt="machine-img" className="machine-img" />
            </div>
            <div class="machine-details">
                <h3>Hardware Manufacturer: HE&M</h3>
                <h3>Serial No:1HEM2325036</h3>
                <h3>OS Version: Saw Program</h3>
                <h3>OS Manufacturer: HE&M</h3>
                <h3>Hardware Version: v3.1</h3>
            </div>
        </div>
        <div class="right-container">
            <div class="machine-status-btns">
                <div class="btn-item">
                    <div class="machine-status-btn">
                     <StatusButton />
                     <StatusButton />
                     <StatusButton />
                    </div>    
                    <div class="sensor-data">
                        
                            <button>Chip-Auger</button>
                            <button>Work Light</button>
                            <button>Laser Light</button>
                        
                    </div>
                </div>
                <div class="saw-pos-chart">
                 <h2>Saw Position</h2>
                 <SawPositionChart />
                </div>
                <div class="components-container">
                    <button>Controller</button>
                    <button>Systems</button>
                    <button>Resources</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default MachineDetails