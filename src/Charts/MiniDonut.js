import React, {useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import './Charts.css';

const MiniDonut = () => {
  console.log("Minidoonut called");
  // Define your chart options and data here
  /*const [chartData, setChartData] = useState([]);
  useEffect(() => {
     console.log('Entered useeffect');
    axios
     .get('http://192.168.136.147:8000')
     .then((response)=> {

      setChartData(response.data.all);
     })
     .catch((error) =>{
      console.error('Error fetching Donut chart data:',error);
     });
  }, []);*/
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '40%',
        },
      },
    },
    dataLabels: {
        enabled: false,
    },
    legend:{
      show: false,
    },
    //labels: chartData.map((dataPoint)=>dataPoint.machineId),
    labels: ['Cutting', 'Not Cutting', 'Stop', 'Alarm'],
    colors: ['#4472C4','#7F7F7F','#FFC000','#FF0000'],
  };
  //const chartSeries = chartData.map((dataPoint)=>dataPoint.description);
  const chartData = [44, 55, 13, 43];
  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartData}
        type="donut"
        height="160"
        width="154"
      />
    </div>
  );
};

export default MiniDonut;



