import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProfilePopup.module.css';
const ProfilePopup = (props) => {
  return (
    <div className={style.popupWrap}>
      <Link className={style.popupLink}to="/profile">Profile</Link>
      <Link className={style.popupLink}to="/logout"><i className='fas fa-sign-out-alt'></i>Logout</Link>
    </div>
  )
}

export default ProfilePopup