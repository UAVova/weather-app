import React from 'react';
import { Line } from 'react-chartjs';

export default (props) => {
  // We're using blank label because of lack of space
  const labels = Array(props.data.length).fill('');
  const chartData = {
    datasets: [{
      data: props.data
    }],
    labels,
  }

  return (
    <Line data={chartData} width={props.width} height={props.height}/>
  );
}
