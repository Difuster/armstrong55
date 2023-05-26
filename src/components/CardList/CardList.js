import React from 'react';
import CardItem from '../CardItem/CardItem';
import './CardList.scss';

const CardList = ({items}) => {
  return (
    <div className="list">
      {items.map(item => {
        return (
          <CardItem key={item.id} item={item} />
        )
      })}
    </div>
  )
};

export default CardList;
