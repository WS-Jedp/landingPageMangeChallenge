import React from 'react';

// Styles
import './ButtonSecondaryStyles.scss';

// eslint-disable-next-line react/prop-types
const ButtonSecondary = ({ title }) => (
  <button className="p-4 rounded-pill buttonSecondary" type="button" title={title || 'Some title pls'}>
    { title || 'Some title pls' }
  </button>
);

export default ButtonSecondary;
