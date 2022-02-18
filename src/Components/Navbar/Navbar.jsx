import React from 'react'
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={style.navbar}>
      <ul className={style.navbarList}>
        <li className={(isActive) => isActive ? style.navbarLink + ' ' + 'activeLink' : style.navbarItem}>
          <Link to="/" className={style.navbarLink}>Home</Link>
        </li>
        <li className={style.navbarItem}>
          <Link to="/addNews" className={style.navbarLink}>Add News</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar