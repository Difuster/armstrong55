import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCeilings } from '../../slices/ceilingsSlice';
import SizeItem from '../../components/SizeItem/SizeItem';
import Characteristics from "../../components/Characteristics/Characteristics";
import './CeilingItem.scss';

const CeilingItem = () => {
  const ceilings = useSelector(selectCeilings).ceilings;
  const params = useParams();
  const [ceilingItem, setCeilingItem] = useState(ceilings.find(c => c.title === params.title));
  const navigate = useNavigate();

  return (
    <div className="ceiling-item">
      <div className="wrapper">
        <div className="ceiling-item__main">
          <div className="ceiling-item__back" onClick={() => navigate(-1)}>
            Вернуться назад
          </div>
          <div className="ceiling-item__header">
            <p className="ceiling-item__description">{ceilingItem.type}</p>
            <h1 className="ceiling-item__description_title">{ceilingItem.title}</h1>
          </div>
          <div className="ceiling-item__body">
            <p>{ceilingItem.description}</p>
          </div>
          <div className="ceiling-item__characteristic characteristic">
            <div className="characteristic__title">
              <h4>Характеристики</h4>
            </div>
            <div className="characteristic__row">
              {ceilingItem.characteristics ? 
                <table className="characteristic__col">
                  <Characteristics characteristics={ceilingItem.characteristics} />
                </table> : 
                null
              }            
              <div className="characteristic__col">
                <ul className="characteristic__sizes">
                  {ceilingItem.sizes.map(size => <SizeItem item={size} key={size.title} />)}
                </ul>
              </div>
              <div className="characteristic__col">
                <img className="characteristic__img" src={ceilingItem.imgMain} alt={ceilingItem.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CeilingItem;
