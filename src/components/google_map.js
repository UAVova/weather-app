import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      }
    });
  }

  render() {
    return <div ref={input => this.map = input} />;
  }
}
