// BarChart.js
import React from 'react';
import './Barchart.css';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({data}) => {
  // Define chart options and data
  const chartOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: (data.map((item)=>item.machineId)),
    },
    colors: ['#4472C4','#ED7D31']
  };

  const chartData = [
    {
      name: 'Job Finished',
      data: (data.map((item)=>item.jobfinished)),
    },
    {
        name: 'Job Pending',
        data: (data.map((item)=>item.jobpending)),
    },
  ];

  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartData}height="390" type="bar" />
     
    </div>
  );
};

export default BarChart;
