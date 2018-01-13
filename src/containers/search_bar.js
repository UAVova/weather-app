import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeaher } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.OnFormSubmit = this.OnFormSubmit.bind(this);
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState({ term })
  }

  OnFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeaher(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.OnFormSubmit} className='input-group'>
        <input
          placeholder='Get a forecast for your city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeaher }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
