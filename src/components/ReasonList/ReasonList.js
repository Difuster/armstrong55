import React from 'react';
import ReasonItem from '../ReasonItem/ReasonItem';
import './ReasonList.scss';

const ReasonList = () => {
  const reasons = [
    {id: 1, text: "Бесплатный расчет"},
    {id: 2, text: "Низкая цена"},
    {id: 3, text: "Гарантия"},
  ];

  return (
    <div className="reasons">
      {reasons.map(reason => {
        return (
          <ReasonItem key={reason.id} reason={reason} />
        )
      })}
    </div>
  )
};

export default ReasonList;
