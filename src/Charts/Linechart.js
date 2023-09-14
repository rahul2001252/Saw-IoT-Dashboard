// LineChart.js
import React/*,{useEffect, useState}*/ from 'react';
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
      name: 'Series 1',
      //labels: chartData.map((dataPoint)=>dataPoint.category)//
      data: (data.map((item)=>item.position)),
    },
  ];

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartData}height="243" type="line" />
    </div>
  );
};

export default LineChart;
