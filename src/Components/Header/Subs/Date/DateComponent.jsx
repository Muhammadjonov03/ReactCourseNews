import React, { Component } from 'react';
import './Date.css'
import clock from './../../../../assets/img/clock.svg'

class DateComponent extends Component {
  render() {
    return (
      <div className="date">
      <img src={this.props.date.dateIcon}alt="" className="date-icon" width={16} height={16} className="date-icon"/>
        <p className="date-text">{this.props.date.date}</p>
      </div>
    );
  }
}

export default DateComponent;