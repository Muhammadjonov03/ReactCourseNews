import React from 'react';
import style from './Header.module.css'
import TodayDate from './Subs/Date/Date';
import Weather from './Subs/Weather/Weather';
import BreakingNews from './Subs/BreakingNews/BreakingNews';
import Socials from './Subs/Socials/Socials';
const Header = (props) => {
  return  <div className={style.mainWrapper}>
  <div className={style.mainInner}>
    <Weather weatherData={props.weatherData}/>
    <TodayDate date={props.date}/>
    <BreakingNews breakingNews={props.breakingNews}/>
    <Socials/>
    
  </div>
</div>
};

export default Header;
