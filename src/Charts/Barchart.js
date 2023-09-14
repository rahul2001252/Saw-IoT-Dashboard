// BarChart.js
import React from 'react';
import './Barchart.css';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  // Define chart options and data
  const chartOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['Saw 1', 'Saw 2', 'Saw 3', 'Saw 4','Saw 5','Saw 6'],
    },
    colors: ['#4472C4','#ED7D31']
  };

  const chartData = [
    {
      name: 'Job Finished',
      data: [30, 40, 25, 50, 44, 38,],
    },
    {
        name: 'Job Pending',
        data: [10, 30, 35, 43, 50,58,],
    },
  ];

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartData} type="bar"  height="390"  />
     
    </div>
  );
};

export default BarChart;
