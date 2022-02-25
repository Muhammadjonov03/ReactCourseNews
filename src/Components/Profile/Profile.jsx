import React from 'react'
import style from './Profile.module.css'
import defaultAvatar from './../../assets/img/default-user-pic.jpg'
const Profile = (props) => {
  return (
    <div className={style.profileWrapper}>
      <img className={style.profileImage} src={defaultAvatar}alt=""  width={300} height={300}/>
      <p className={style.profileUsername}>Username</p>
    </div>
  )
}

export default Profile