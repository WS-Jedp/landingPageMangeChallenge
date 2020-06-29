/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

// Components
import Button from '../Button/Button';
import IconLogo from '../Icons/IconLogo';
import IconMenu from '../Icons/IconMenu';
import MenuResponsive from '../MenuResponsive/MenuResponsive';

// Styles
import './HeaderStyles.scss';

const Header = () => {
  const [menuHandler, setMenuHandler] = useState(false);

  useEffect(() => {
    const menuResponsive = document.getElementById('menu-responsive');
    const header = document.getElementById('header');

    if (menuHandler) menuResponsive.style.bottom = '-60px';
    else menuResponsive.style.bottom = '-100%';

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) header.style.backgroundColor = '#fafafa';
      else header.style.backgroundColor = 'rgba(0,0,0,0)';
    });
  });

  const handlerMenu = () => {
    if (menuHandler !== true) setMenuHandler(true);
    else setMenuHandler(false);
  };

  return (
    <header id="header" className="container-fluid col-12 d-flex flex-row align-items-center justify-content-around header">
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

      <button type="button" className="d-inline d-md-none header__menu" onClick={() => handlerMenu()}>
        <IconMenu />
      </button>

      <section id="menu-responsive" className="d-flex d-md-none pt-5 justify-content-center container-fluid header__menu-responsive">
        <MenuResponsive />
      </section>
    </header>
  );
};

export default Header;
