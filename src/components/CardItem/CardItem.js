import React from 'react';
import { useNavigate } from "react-router-dom";
import './CardItem.scss';

const CardItem = ({item}) => {
  const navigate = useNavigate();
  const path = `/${item.ceilingType}/${item.title}`;
  return (
    <div onClick={() => navigate(path)} className="card-item">
      <div className="card-item__card">
        <img className="card-item__img" src={item.img} alt={item.title} />
        <p className="card-item__title">
          {item.title}
        </p>
      </div>
    </div>
  )
};

export default CardItem;
