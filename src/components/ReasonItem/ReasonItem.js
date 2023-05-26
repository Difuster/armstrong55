import React from 'react';
import './ReasonItem.scss';

const ReasonItem = ({reason}) => {
  return (
    <div className="reason">
      <p className="reason__text">
        {reason.text}
      </p>
    </div>
  )
};

export default ReasonItem;
