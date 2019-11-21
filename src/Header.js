import React from 'react';
import './css/header.css';
import img1 from './images/logo.jpg';

export default function Header() {
  return(
    <div className="header">

      <div className="header_maincontainer">
        <div className="header_maincontainer_item">
          <img src={img1} alt="hello" height="100%"/>
          <a href="/" className="header_maincontainer_logo">ТентЗащита</a>
        </div>
        <div className="header_maincontainer_item">
          <ul>
            <a href="#AboutUs"><li>О нас</li></a>
            <a href="#Goods"><li>Товары</li></a>
            <a href="#Contacts"><li>Контакты</li></a>
          </ul>
        </div>
        <div className="header_maincontainer_item">
          <p>8 (960) 299-92-29</p>
          <a href="https://vk.com/club188145621"><i class="fab fa-vk"></i></a>
        </div>
      </div>

    </div>
  );
}
