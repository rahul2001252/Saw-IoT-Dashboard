import React from 'react';
import './Controller.css';
import BarApp from './Charts/BarApp';
import Sidebar from './Sidebar';
// ButtonBox component
function ButtonBox(props) {
  return (
    <div className="button-box">
      <button>{props.button1Text}</button>
      <button>{props.button2Text}</button>
    </div>
  );
}

function Controller() {
    // Example data for the chart
    return (
      <div className="OuterBox">
      <h2 className="headingtext">Controller</h2>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className="controller-display">
        <div className="half-left">
            <h2 className="textheading">PLC</h2>
          <ButtonBox button1Text="Estop" button2Text="Normal" />
          <div className="barbox">
            <h2 className="bartext">Saw Material</h2>
          <BarApp />
        </div>
        </div>
        <div className="half-right">
          <h2 className="textheading">Saw Controller</h2>
          <ButtonBox button1Text="Started" button2Text="Auto" />
         <div className="barbox">
            <h2 className="bartext">Saw Controller information</h2>
          <BarApp />
          </div>
        </div>
      </div>
      </div>
      
    );
  }

export default Controller;
