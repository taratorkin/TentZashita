import React from 'react';
import './css/footer.css';

function Footer() {
  return(
    <div className="footer">
      <ul>
       <a className="footer_list_link" href="#AboutUs"><li className="footer_list_item">О нас</li></a>
       <a className="footer_list_link" href="#Goods"><li className="footer_list_item">Товары</li></a>
       <a className="footer_list_link" href="#Contacts"><li className="footer_list_item">Контакты</li></a>
      </ul>
    </div>
  );
}

export default Footer;
