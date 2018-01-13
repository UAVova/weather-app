import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs';

class WeatherList extends Component {
  convertDate(date) {
    return new Date(date).toLocaleTimeString([],
      {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
    );
  }

  renderWeather(data) {
    const temps = data.list.map(weather => weather.main.temp);
    // We're using blank label because of lack of space
    const labels = Array(temps.length).fill('');
    const chartData = {
      datasets: [{
        data: temps
      }],
      labels,
    }

    return (
      <tr key={data.city.id}>
        <td>
          {data.city.name}
        </td>
        <td>
          <Line data={chartData} width="300" height="250"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>
              City
            </th>
            <th>
              Temperature
            </th>
            <th>
              Pressure
            </th>
            <th>
              Humidity
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(data => this.renderWeather(data))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
