import React from 'react';

// Styles
import './MenuResponsiveStyles.scss';

const MenuResponsive = () => (
  <article className="d-flex flex-column justify-content-center align-items-center rounded menu-responsive">
    <ul>
      <li className="p-3"><a aria-label="Go To Pricing" href="/">Pricing</a></li>
      <li className="p-3"><a aria-label="Go To Product" href="/">Product</a></li>
      <li className="p-3"><a aria-label="Go To About Us" href="/">About Us</a></li>
      <li className="p-3"><a aria-label="Go To Careers" href="/">Careers</a></li>
      <li className="p-3"><a aria-label="Go To COmmunity" href="/">Community</a></li>
    </ul>
  </article>
);

export default MenuResponsive;
