import React from 'react';
import './css/header.css';
import img1 from './images/logo.jpg';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { menuEnabled: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    return(
      <div className="header">
      <a name="Start"></a>
        <div className="header_maincontainer">
          <div className="header_maincontainer_item">
            <a href="#mobile_menu" className='barsIcon' onClick={this.toggleMenu}>
              <i class="fas fa-bars"></i>
            </a>
            <img src={img1} alt="hello" height="100%"/>
            <a href="/" className="header_maincontainer_link header_maincontainer_logo">ТентЗащита</a>
          </div>
          <div className={this.state.menuEnabled
            ? 'header_maincontainer_item mobile_menu'
            : 'header_maincontainer_item mobile_menu_hidden'}>
            <ul className="dropdown_content">
              <li className="header_maincontainer_menuItem"><a className="header_maincontainer_link" href="#AboutUs">О нас</a></li>
              <li className="header_maincontainer_menuItem"><a className="header_maincontainer_link" href="#Goods">Товары</a></li>
              <li className="header_maincontainer_menuItem"><a className="header_maincontainer_link" href="#Contacts">Контакты</a></li>
            </ul>
          </div>
          <div className="header_maincontainer_item mobile_menu_hidden">
            <p>8 (960) 299-92-29</p>
            <a className="header_maincontainer_link" href="https://vk.com/club188145621"><i class="fab fa-vk"></i></a>
          </div>
        </div>

      </div>
    );
  }

  toggleMenu() {
    this.setState((state) => ({
      menuEnabled: !state.menuEnabled
    }));
  }
}
