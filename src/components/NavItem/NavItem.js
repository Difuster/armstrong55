import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

const NavItem = ({header, list, closenav}) => {
  return (
    <div className="nav-item">
      <h2 className="nav-item__title">
        {header}
      </h2>
      <ul className="nav-item__list">
        {list.map(li => {
          return (
            <li key={li.title}>
              <Link className="nav-item__link" to={li.link} onClick={closenav}>
                {li.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavItem;
