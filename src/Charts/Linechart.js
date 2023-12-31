// LineChart.js
import React from 'react';
//import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import './Linechart.css';
const LineChart = ({data}) => {
  const chartOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: (data.map((item)=>item.timestamp)),
    },
  };

  const chartData = [
    {
      name: 'GFAgie01',
      //name: (data.map((item)=>item.name))
      //labels: chartData.map((dataPoint)=>dataPoint.category)//
      data: (data.map((item)=>item.position)),
    },
  ];

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartData}height="240" type="line" />
    </div>
  );
};

export default LineChart;
