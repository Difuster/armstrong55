import React from 'react';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts contacts-paddings">
      <div className="contacts__address contacts-display">
        <p>Омск, ул. Маршала Жукова 144</p>
      </div>
      <div className="contacts__phone contacts-display">
        <a className="contacts__link" href="tel: +79514278926">8-951-427-89-26</a>
      </div>
      <div className="contacts__mail contacts-display">
        <a className="contacts__link" href="mailto:snabremont@bk.ru">snabremont@bk.ru</a>
      </div>
    </div>
  )
}

export default Contacts;
