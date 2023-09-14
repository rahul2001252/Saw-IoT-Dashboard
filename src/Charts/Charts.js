import React from 'react';
import './Charts.css';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const data1 = [{ name: 'Series 1', data: [31, 40, 28, 51, 42, 109, 100] }];
  const options1 = { chart: { id: 'chart1', type: 'line' } };

 

  const data2 = [{ name: 'Series 1', data: [21, 22, 10, 28, 16, 5, 30] }];
  const options2 = { chart: { id: 'chart2', type: 'bar' } };

 

  return (
<div>
<h1>Multiple ApexCharts in React</h1>
<div className="chart-container">
<Chart1 data={data1} options={options1} />
</div>
<div className="chart-container">
<Chart2 data={data2} options={options2} />
</div>
</div>
  );
};

export default Charts;
