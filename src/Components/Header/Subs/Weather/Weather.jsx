import React from 'react';
import sun from './../../../../assets/img/sun.svg';
import './Weather.css'
const weatherData = {
  weatherDegree: 38,
  location: 'Tashkent',
  weatherIcon: sun
}
const Weather = () => {
  return (
    <div className="weather">
      <img src={weatherData.weatherIcon} alt="weather" width={16} height={16} className="weather-icon"/>
      <p className="weather-degree">{weatherData.weatherDegree}</p>
      <p className="weather-city">{weatherData.location}</p>
    </div>
  )
};

export default Weather;
