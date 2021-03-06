import React from 'react';

// Styles
import './ButtonStyles.scss';

// eslint-disable-next-line react/prop-types
const Button = ({ title, typeBtn }) => (
  // eslint-disable-next-line react/button-has-type
  <button aria-label={title} className="p-4 rounded-pill button" type={typeBtn || 'button'} title={title || 'Some title pls'}>
    { title || 'Some title pls' }
  </button>
);

export default Button;
