import React from 'react';
import './Weather.css'

const Weather = (props) => {
  return (
    <div className="weather">
      <img src={props.weatherData.weatherIcon} alt="weather" width={16} height={16} className="weather-icon"/>
      <p className="weather-degree">{props.weatherData.weatherDegree}</p>
      <p className="weather-city">{props.weatherData.location}</p>
    </div>
  )
};

export default Weather;
