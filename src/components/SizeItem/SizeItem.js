import React from 'react';
import './SizeItem.scss';

function SizeItem({item}) {
  return (
    <div className="sizes-item__wrapper">
      <li key={item.title} className="sizes-item__row">
        <h4 className="sizes-item__title">{item.title}</h4>
        <div className="sizes-item__section">
          {item.values.map(value => {
            return (
              <p className="sizes-item__col" key={value}>
                <img className="sizes-item__image" src={`../images/sizes/${value}.jpg`} alt={value} />
                <span className="sizes-item__value">{value}</span>
              </p>
            )
          })}
        </div>
      </li>
    </div>
  )
}

export default SizeItem;
