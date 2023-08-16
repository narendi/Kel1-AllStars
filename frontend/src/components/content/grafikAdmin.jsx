import React from 'react';
import { Line } from '@ant-design/charts';

const Tc = () => {
  const data = [
    { day: 'Senin', value: 2 },
    { day: 'Selasa', value: 4 },
    { day: 'Rabu', value: 5 },
    { day: 'Kamis', value: 3 },
    { day: 'Jumat', value: 2 },
    { day: 'Sabtu', value: 3 },
    { day: 'Minggu', value: 1 },
    // ...data lainnya
  ];

  const config = {
    data,
    xField: 'day',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'dot',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    xAxis: {
      title: {
        text: '',
      },
    },
    yAxis: {
      title: {
        text: '',
      },
    },
  };

  
  return <Line {...config} />;
};

export default Tc;
