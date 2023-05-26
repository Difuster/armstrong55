import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="wrapper">
      <div className="not-found__row">
        <div className="not-found__circle">
          <div className="not-found__stop">
            <p>Такой страницы не существует</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NotFound;
