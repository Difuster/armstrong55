import React from 'react';
import './Characteristics.scss';

const Characteristics = ({characteristics}) => {
  return (
    <tbody className="chars">
      {characteristics.map(char => {
        return (
          <tr className="chars__row" key={char.title}>
            <td className="chars__title">{char.title}</td>
            <td className="chars__value">{char.value}</td>
          </tr>
        )
      })}
    </tbody>
  )
};

export default Characteristics;
