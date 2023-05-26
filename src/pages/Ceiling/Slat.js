import React from 'react';
import { useSelector } from 'react-redux';
import { selectCeilings } from '../../slices/ceilingsSlice';
import { selectDescriptions } from '../../slices/descriptionSlice';
import Description from '../../components/Description/Description';
import './Ceiling.scss';
import CardList from '../../components/CardList/CardList';
import ReasonList from '../../components/ReasonList/ReasonList';

const Slat = () => {
  const slat = useSelector(selectCeilings).ceilings.filter(c => c.ceilingType === "slat");
  const description = useSelector(selectDescriptions).slat;

  return (
    <div className="ceiling">
      <div className="wrapper">
        <Description value={description} />
        <ReasonList />
        <CardList items={slat}/>
      </div>
    </div>
  )
};

export default Slat;
