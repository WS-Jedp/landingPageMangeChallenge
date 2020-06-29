import React from 'react';

// Components
import Button from '../Button/Button';
import IconLogo from '../Icons/IconLogo';
import IconMenu from '../Icons/IconMenu';

// Styles
import './HeaderStyles.scss';

const Header = () => (
  <header className="container-fluid col-12 d-flex flex-row align-items-center justify-content-around header">
    <a href="#main" aria-label="Skip to the content" className="border p-4 header__skip-content">
      Skip Content
    </a>
    <figure>
      <a aria-label="Logo of Manage Landing" href="/">
        <IconLogo />
      </a>
    </figure>

    <nav className="header__nav d-none d-md-flex">
      <ul className="d-flex flex-direction-row">
        <li className="d-inline p-2"><a aria-label="Go To Pricing" href="/">Pricing</a></li>
        <li className="d-inline p-2"><a aria-label="Go To Product" href="/">Product</a></li>
        <li className="d-inline p-2"><a aria-label="Go To About Us" href="/">About Us</a></li>
        <li className="d-inline p-2"><a aria-label="Go To Careers" href="/">Careers</a></li>
        <li className="d-inline p-2"><a aria-label="Go To Community" href="/">Community</a></li>
      </ul>
    </nav>

    <div className="d-none d-md-inline header__action">
      <Button title="Get Started" />
    </div>

    <button type="button" className="d-inline d-md-none header__menu">
      <IconMenu />
    </button>
  </header>
);

export default Header;
