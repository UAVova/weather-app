import _ from 'lodash';
import React from 'react';
import { Line } from 'react-chartjs';

const average = data => _.round(_.sum(data) / data.length)

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
    <div>
      <Line data={chartData} width={props.width} height={props.height}/>
      <div className="average-bar">Average: {average(props.data)} {props.units}</div>
    </div>
  );
}
