import React from 'react';
import ReactApexChart from 'react-apexcharts';
const DonutChart = ({data}) => {
  const options = {
    labels: (data.map((item)=>item.status)),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    plotOptions: {
      pie: {
        donut: {
          size: '40%',
          
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
    },
  };
  return (
    <div className="donut-chart">
    <ReactApexChart
            options={options}
            series={data.map((item) => item.value)}
            type="donut"
            height={250}
          />
    </div>
  );
};

export default DonutChart;
