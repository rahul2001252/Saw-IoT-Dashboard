import ReactApexChart from 'react-apexcharts';
import './Charts.css';

const MiniDonut = () => {
  console.log("Minidoonut called");
  // Define your chart options and data here
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
        height="120"
        width="120"
      />
    </div>
  );
};

export default MiniDonut;



