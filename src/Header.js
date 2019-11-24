import React from 'react';
import './css/header.css';
import img1 from './images/logo.jpg';

export default function Header() {
  return(
    <div className="header">

      <div className="header_maincontainer">
        <div className="header_maincontainer_item">
          <img src={img1} alt="hello" height="100%"/>
          <a href="/" className="header_maincontainer_link header_maincontainer_logo">ТентЗащита</a>
        </div>
        <div className="header_maincontainer_item">
          <ul>
            <a className="header_maincontainer_link" href="#AboutUs"><li className="header_maincontainer_menuItem">О нас</li></a>
            <a className="header_maincontainer_link" href="#Goods"><li className="header_maincontainer_menuItem">Товары</li></a>
            <a className="header_maincontainer_link" href="#Contacts"><li className="header_maincontainer_menuItem">Контакты</li></a>
          </ul>
        </div>
        <div className="header_maincontainer_item">
          <p>8 (960) 299-92-29</p>
          <a className="header_maincontainer_link" href="https://vk.com/club188145621"><i class="fab fa-vk"></i></a>
        </div>
      </div>

    </div>
  );
}
