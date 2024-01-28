import React, { Component } from 'react';
export default class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          Filter
          <input
            onChange={this.props.onChange}
            value={this.props.filter}
            name="filter"
          />
        </label>
      </div>
    );
  }
}