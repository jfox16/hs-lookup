import React, { Component } from 'react';
import './StatSummary.css';

class StatSummary extends Component {
  render() {
    return (
      <div className="StatSummary">
      <table>
      <tbody>
        <tr>
          <th></th>
          <th> Mean </th>
          <th> Median </th>
          <th> StDev </th>
        </tr>
        <tr>
          <td></td>
          <td>{this.props.mean.toFixed(2)}</td>
          <td>{this.props.median.toFixed(2)}</td>
          <td>{this.props.stdev.toFixed(2)}</td>
        </tr>
      </tbody>
      </table>
      </div>
    );
  }
}

export default StatSummary;