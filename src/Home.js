import React from 'react';
//import './Home.css'; // Import the CSS filey

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the IoT Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        mauris at sem tristique varius. Sed euismod odio et ante vehicula, id
        varius tortor condimentum.
      </p>
      <div className="iot-data">
        <h3>Current IoT Data</h3>
        <ul>
          <li>Temperature: 25°C</li>
          <li>Humidity: 50%</li>
          <li>Pressure: 1013 hPa</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
