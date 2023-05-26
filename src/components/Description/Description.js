import React from 'react';
import './Description.scss';

const Description = ({value}) => {

  return (
    <section className="description">
      <h1 className="description__title">
        {value.title}
      </h1>
      <article className="description__body">
        <p className="description__text">
          {value.value}
        </p>
      </article>
    </section>
  )
};

export default Description;
