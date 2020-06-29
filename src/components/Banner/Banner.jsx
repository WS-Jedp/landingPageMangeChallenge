/* eslint-disable react/prop-types */
import React from 'react';

// styles
import './BannerStyles.scss';

// Components
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';

const Banner = ({ title }) => (
  <article className="row m-0 px-5 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center manage__banner">
    <h2 className="d-flex justify-content-center mb-5 mb-sm-none justify-content-md-start align-items-center col-12 col-md-6">
      {title}
    </h2>
    <div className="d-flex justify-content-center justify-content-md-end align-items-center col-12 col-md-6">
      <ButtonSecondary title="Get Started" />
    </div>
  </article>
);

export default Banner;
