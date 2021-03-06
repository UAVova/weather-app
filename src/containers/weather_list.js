import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

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
    const pressure = data.list.map(weather => weather.main.pressure);
    const humidity = data.list.map(weather => weather.main.humidity);
    const { lon, lat } = data.city.coord;
    return (
      <tr key={data.city.id}>
        <td>
          <GoogleMap lng={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} width="250" height="250" units="K"/>
        </td>
        <td>
          <Chart data={pressure} width="250" height="250" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} width="250" height="250" units="%"/>
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
