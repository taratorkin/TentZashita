import React from 'react';
import './css/content.css';
import tentImg from './images/tent.jpg';

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
            <img className="content_mainScreen_image" src={tentImg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
