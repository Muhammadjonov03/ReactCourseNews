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
    <Weather weatherData={props.headerData.weatherData}/>
    <TodayDate date={props.headerData.date}/>
    <BreakingNews breakingNews={props.headerData.breakingNews}/>
    <Socials/>
    <Profilebtn 
    onProfilePopupToggledActionCreator={props.onProfilePopupToggledActionCreator}
    dispatch={props.dispatch}/>
    {
      props.profilePopupVisible
    ?<ProfilePopup/>
    : null
    }
  </div>
</div>
};

export default Header;
