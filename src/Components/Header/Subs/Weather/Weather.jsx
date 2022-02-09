import React from 'react';
import './Weather.css'

class Weather extends React.Component {
  

  render() {
    return (
      <div className="weather">
      <img src={this.props.weatherData.weatherIcon} alt="weather" width={16} height={16} className="weather-icon"/>
      <p className="weather-degree">{this.props.weatherData.weatherDegree}</p>
      <p className="weather-city">{this.props.weatherData.location}</p>
    </div>
    )
  }
}

export default Weather;
