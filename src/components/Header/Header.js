import React from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import './Header.scss';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__row">
          <div className="header__logo">
            <Link className="header__link" to="/">
              Стройбат
            </Link>
          </div>
          <Contacts />
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header;
