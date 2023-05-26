import React from 'react';
import { useSelector } from 'react-redux';
import { selectCeilings } from '../../slices/ceilingsSlice';
import { selectDescriptions } from '../../slices/descriptionSlice';
import Description from '../../components/Description/Description';
import './Ceiling.scss';
import CardList from '../../components/CardList/CardList';
import ReasonList from '../../components/ReasonList/ReasonList';

const Grid = () => {
  // const grid = useSelector(selectCeilings).ceilings.filter(c => c.ceilingType === "grid");
  const description = useSelector(selectDescriptions).grid;

  return (
    <div className="ceiling">
      <div className="wrapper">
        <Description value={description} />
        <ReasonList />
        {/* <CardList items={grid}/> */}
      </div>
    </div>
  )
};

export default Grid;
