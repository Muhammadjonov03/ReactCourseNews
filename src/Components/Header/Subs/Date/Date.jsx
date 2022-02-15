import React from 'react';
import './Date.css'

const TodayDate = (props) => {
  return (
    <div className="date">
    <img src={props.date.dateIcon}alt="" className="date-icon" width={16} height={16} className="date-icon"/>
    <p className="date-text">{props.date.date}</p>
  </div>
  )
};

export default TodayDate;
