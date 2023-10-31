import React, { useEffect, useState } from 'react';
import './styles/App.css';
import DonutApp from './Charts/DonutApp';
import BarApp from './Charts/BarApp';
import MiniDonut from './Charts/MiniDonut';
import LineApp from './Charts/LineApp';
import Sidebar from './Sidebar';
import StatusButton from './StatusButton';

const Dashboard = () => {
  const [ws, setWs] =useState(null);
  const [messages, setMessages] = useState('');
  
  const connectWebSocket = () =>{
  //   // Check if the user is authenticated
    const newws = new WebSocket("ws://localhost:8000/status");
    newws.onopen = () =>{
      console.log("Websocket connection established");
    };

    newws.onmessage = (e) =>{
      const newMessage = e.data;
       // Update the state with the new message
       setMessages(newMessage);
      console.log(e.data);
    };

    newws.onclose = (e) =>{
      console.log("Websocket connection closed:",e);

      setTimeout(() => connectWebSocket(),1000);
    }
    setWs(ws);
  };
  useEffect(() =>{
    connectWebSocket();

    return () =>{
      if(ws){
        ws.close();
      }
    };

  },[ws]);

    return (
      <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="upper-page">
        
        <div className="machine-status-buttons">
          <h2>Saw Status</h2>
          <div className="status-btn">
            <div className={`status ${messages === 'Start' ? 'Start' : messages === 'Stop' ? 'Stop': 'Alarm'}`}>{messages}</div>
            <div id="statusbtn"><StatusButton /></div>
            <div id="statusbtn"><StatusButton /></div>
          </div>
          <div className="status-btn">
            <div id="statusbtn"><StatusButton /></div>
            <div id="statusbtn"><StatusButton /></div>
            <div id="statusbtn"><StatusButton /></div>
          </div>
        </div>
        <div className="overall-saw-status">
          <h2>Overall Saw Status</h2>
          <div className="donutgp">
            <DonutApp />
          </div>
        </div>
      <div className="line-container">
        <div className="saw-pos">
          <h2 className="saw-pos-title">Saw Position</h2>
          <div name="rhs">
            <LineApp />
          </div>
        </div>
      </div>
      </div>
      <div className='bottom-page'>
      <div className="mini-container">
              <h2>Individual Saw Status</h2>
              <div className="flex-item">
                <div className="donut"><h2>Saw 1</h2><MiniDonut /></div>
                <div className="donut"><h2>Saw 2</h2><MiniDonut /></div>
                <div className="donut"><h2>Saw 3</h2><MiniDonut /></div>
              </div>
              <div className="flex-item">
                <div className="donut"><h2>Saw 4</h2><MiniDonut /></div>
                <div className="donut"><h2>Saw 5</h2><MiniDonut /></div>
                <div className="donut"><h2>Saw 6</h2><MiniDonut /></div>
              </div>
      </div>
      <div className="bar">
        <div className="bar-box">
          <h2>Overall Job Status</h2>
          <div className="bar-chart">
            <BarApp />
          </div>
        </div>
      </div>
      </div> 
    </div>
    
      );
    }

export default Dashboard;