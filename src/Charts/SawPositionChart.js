// LineChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Linechart.css';
const SawPositionChart = () => {
  // Define chart options and data
  const chartOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
  };

  const chartData = [
    {
      name: 'Series 1',
      data: [30, 40, 25, 50, 45],
    },
  ];

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartData}height="243" width="700" type="line" />
    </div>
  );
};

export default SawPositionChart;
