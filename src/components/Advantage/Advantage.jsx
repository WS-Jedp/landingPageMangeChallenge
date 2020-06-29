/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import './AdvantageStyles.scss';

const Advantage = ({ title, index, content }) => (
  <article className="mb-5 mb-md-3 advantage">
    <div className="d-flex flex-row rounded-pill align-items-center py-none py-md-4 advantage__title">
      <span className="py-1 px-3 mr-4 d-flex align-items-center justify-content-center rounded-pill">{index}</span>
      <h3>{title}</h3>
    </div>
    <p className="advantage__content">
      {content}
    </p>
  </article>
);

export default Advantage;
