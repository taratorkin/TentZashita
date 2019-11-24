import React from 'react';
import './css/content.css';
import tentImg from './images/tent.jpg';
import tentImg2 from './images/tent2.jpg';

function Content() {
  return(
    <div className="content">

      <div className="content_mainScreen_wrapper">
        <div className="content_mainScreen">
          <div className="content_mainScreen_block">
            <p className="content_mainScreen_headline">"ТентЗащита"</p>
            <p className="content_mainScreen_desc">Пошив и ремонт тентов</p>
            <p className="content_mainScreen_contacts">Череповец</p>
            <p className="content_mainScreen_contacts">ул. Бабушкина 15</p>
            <p className="content_mainScreen_contacts">+7 (960) 299-92-29</p>
          </div>
          <div className="content_mainScreen_block">
            <img className="content_mainScreen_image" src={tentImg} alt="Палатка сварщика"/>
          </div>
        </div>
      </div>

      <div className="content_about">
        <a name="AboutUs"></a>
        <div className="content_about_element">
          <div className="content_about_element_text">
            <h2>
              Мы предлагаем
            </h2>
            Пошив и ремонт тентов. Собственное производство. Доставка во все регионы.
            Изготовление по индивидуальным заказам. Принимаем оплату, в том числе,
            по безналичному расчёту. Скидки на оптовые заказы.
          </div>
        </div>
        <div className="content_about_image">

        </div>
      </div>
    </div>
  );
}

export default Content;
