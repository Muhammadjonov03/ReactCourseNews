import React from 'react';
import style from './Header.module.css'
import TodayDate from './Subs/Date/Date';
import Weather from './Subs/Weather/Weather';
import BreakingNews from './Subs/BreakingNews/BreakingNews';
import Socials from './Subs/Socials/Socials';
import Profilebtn from './Subs/Profilebtn/Profilebtn';
import ProfilePopup from './Subs/ProfilePopup/ProfilePopup';
const Header = (props) => {
  return  <div className={style.mainWrapper}>
  <div className={style.mainInner}>
    <Weather weatherData={props.weatherData}/>
    <TodayDate date={props.date}/>
    <BreakingNews breakingNews={props.breakingNews}/>
    <Socials/>
    <Profilebtn toggleProfilePopup={props.toggleProfilePopup}/>
    {
      props.profilePopupVisible
    ?<ProfilePopup/>
    : null
    }
  </div>
</div>
};

export default Header;
