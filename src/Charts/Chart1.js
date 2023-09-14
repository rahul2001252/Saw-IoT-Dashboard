import React from 'react';
import ReactApexChart from 'react-apexcharts';

 

const Chart1 = ({ data, options }) => {
  return (
<ReactApexChart options={options} series={data} type="line" height={300} />
  );
};

 

export default Chart1;