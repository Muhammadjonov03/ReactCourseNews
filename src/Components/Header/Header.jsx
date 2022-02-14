import  React   from 'react';
import style from './Header.module.css'
import DateComponent from './Subs/Date/DateComponent';
import Weather from './Subs/Weather/Weather';
import BreakingNews from './Subs/BreakingNews/BreakingNews';
import Socials from './Subs/Socials/Socials';
const Header = (props) => {
    return (
      <div className={style.mainWrapper}>
      <div className={style.mainInner}> 
        <Weather weatherData={props.weatherData}/>
        <DateComponent date={props.date}/>
        <BreakingNews breakingNews={props.breakingNews}/>
        <Socials/>
        
      </div>
    </div>
    )
}

export default Header;


// Header => Object ========  this 