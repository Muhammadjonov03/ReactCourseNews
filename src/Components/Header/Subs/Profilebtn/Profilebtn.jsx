import React from 'react'
import  style from './Profilebtn.module.css'

const Profilebtn = (props) => {
  const onPopupToggled = () => {
    props.toggleProfilePopup()
  }
  return (
    <button 
    onClick={onPopupToggled}
    className={style.profileButton}>
      <i className='fas fa-user'></i>
    </button>
  )
}

export default Profilebtn