import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState({ term })
  }

  OnFormSubmit(event) {
    event.preventDefault();
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
