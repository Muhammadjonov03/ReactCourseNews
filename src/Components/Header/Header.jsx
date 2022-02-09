import React, { Component } from 'react';
import style from './Header.module.css'
import DateComponent from './Subs/Date/DateComponent';
import Weather from './Subs/Weather/Weather';
import BreakingNews from './Subs/BreakingNews/BreakingNews';
import Socials from './Subs/Socials/Socials';
class Header extends Component {


  render() {
    return (
      <div className={style.mainWrapper}>
      <div className={style.mainInner}> 
        <Weather weatherData={this.props.weatherData}/>
        <DateComponent date={this.props.date}/>
        <BreakingNews breakingNews={this.props.breakingNews}/>
        <Socials/>
        
      </div>
    </div>
    )
  }
}

export default Header;


// Header => Object ========  this 