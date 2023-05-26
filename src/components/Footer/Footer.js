import React from 'react';
import './Footer.scss';
import armstrongIcon from '../../assets/footer/armstrong.png';
import albesIcon from '../../assets/footer/albes.png';
import dStroyIcon from '../../assets/footer/d-stroy.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__row">
          <div className="footer__col">
            <p className="footer__firm-name">
              Стройбат
            </p>
            <p className="footer__text">
              официальный дистрибьютор
            </p>
            <div className="footer__logos">
              <img className="mr-15" src={armstrongIcon} alt="Армстронг" />
              <img className="mr-15" src={albesIcon} alt="Албес" />
              <img src={dStroyIcon} alt="Д-Строй" />
            </div>
          </div>
          <address className="footer__col">
            <h4>Контакты</h4>
            <p>Омск, ул. М. Жукова 144</p>
            <a className="footer__link" href="mailto:snabremont@bk.ru">snabremont@bk.ru</a>
            <a className="footer__link" href="tel: +79514278926">8-951-427-89-26</a>
            <a className="footer__link" href="tel: +73812321029">8(3812)32-10-29</a>
          </address>
          <nav className="footer__col">
            <ul>
              <li>Главная</li>
              <li>Калькулятор</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer;
