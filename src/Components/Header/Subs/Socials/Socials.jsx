import  React   from 'react';
import './Socials.css'
import fb from './../../../../assets/img/fb.svg';
import tw from './../../../../assets/img/tw.svg';
import ig from './../../../../assets/img/ig.svg';
import yt from './../../../../assets/img/yt.svg';
const Socials = (props) => {

    return (
      <div className="social-links-wrapper">
  <ul className="social-links-list">
    <li className="social-links-item">
      <a href="#" className="social-links-link">
        <img src={fb} alt="" className="social-links-icon"/>
      </a>
    </li>
    <li className="social-links-item">
      <a href="#" className="social-links-link">
        <img src={tw} alt="" className="social-links-icon"/>
      </a>
    </li>
    <li className="social-links-item">
      <a href="#" className="social-links-link">
        <img src={ig} alt="" className="social-links-icon"/>
      </a>
    </li>
    <li className="social-links-item">
      <a href="#" className="social-links-link">
        <img src={yt} alt="" className="social-links-icon"/>
      </a>
    </li>
  </ul>
</div>
    );

}

export default Socials;