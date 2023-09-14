import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Charts.css';

 

const Chart2 = ({ data, options }) => {
  return (
<ReactApexChart options={options} series={data} type="bar" height={300} />
  );
};

 

export default Chart2;