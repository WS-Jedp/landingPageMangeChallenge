/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import './ContentStyles.scss';

// Components
import Button from '../Button/Button';

const Content = ({
  title, content, heading, button, buttonTitle,
}) => (
  <div className="d-flex flex-column justify-content-between justify-content-md-start align-items-center align-items-md-start content">
    <h2 className={heading}>
      {title || 'Some Title pls'}
    </h2>
    <p className="pt-4 pb-4 content__text">
      {content || 'Some contens pls'}
    </p>

    {
      button && <Button title={buttonTitle} />
    }
  </div>
);

export default Content;
