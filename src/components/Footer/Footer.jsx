import React from 'react';

// Components
import Button from '../Button/Button';
import IconLogo from '../Icons/IconLogo';
import IconFacebook from '../Icons/IconFacebook';
import IconInstagram from '../Icons/IconInstagram';
import IconPinterest from '../Icons/IconPinterest';
import IconTwitter from '../Icons/IconTwitter';
import IconYoutube from '../Icons/IconYoutube';

// Styles
import './FooterStyles.scss';

const Footer = () => (
  <footer className="row p-5 m-0 d-flex flex-column flex-md-row flex-wrap justify-content-center justify-content-lg-around align-items-center footer">
    <small className="d-inline d-lg-none m-5 text-center">
      Copyright 2020. All Rights Reserved
    </small>

    <div className="d-flex flex-column-reverse my-3 my-lg-none flex-lg-column align-items-center justify-content-around col-12 col-lg-2 footer__icons">
      <figure aria-label="Logo of Manage" className="d-flex my-5 my-lg-none justify-content-center align-items-center">
        <a href="/" aria-label="Logo of Manage - Go To Home">
          <IconLogo negative />
        </a>
      </figure>

      <div className="d-flex flex-row w-100 justify-content-around">
        <a href="/" aria-label="Go To Facebook">
          <IconFacebook />
        </a>
        <a href="/" aria-label="Go To Youtube">
          <IconYoutube />
        </a>
        <a href="/" aria-label="Go To Twitter">
          <IconTwitter />
        </a>
        <a href="/" aria-label="Go To Pinterest">
          <IconPinterest />
        </a>
        <a href="/" aria-label="Go To Instagram">
          <IconInstagram />
        </a>
      </div>

    </div>

    <nav className="d-flex flex-row flex-nowrap justify-content-center align-items-start col-12 col-lg-4 m-4 row">
      <ul className="d-flex flex-column align-items-start align-items-lg-start justify-content-start col-4 col-lg-6 footer__nav">
        <li className="py-2"><a aria-label="Go To Home" href="/">Home</a></li>
        <li className="py-2"><a aria-label="Go To Pricing" href="/">Pricing</a></li>
        <li className="py-2"><a aria-label="Go To Products" href="/">Products</a></li>
        <li className="py-2"><a aria-label="Go To About Us" href="/">About Us</a></li>
      </ul>
      <ul className="d-flex flex-column align-items-start align-items-lg-start justify-content-start col-4 col-lg-6 footer__nav">
        <li className="py-2"><a aria-label="Go To Careers" href="/">Careers</a></li>
        <li className="py-2"><a aria-label="Go To Conmmunity" href="/">Community</a></li>
        <li className="py-2"><a aria-label="Go To Privacy Policy" href="/">Privacy Policy</a></li>
      </ul>
    </nav>

    <div className="d-flex flex-column align-items-center align-items-lg-end justify-content-around col-12 col-lg-4 footer__copy">
      <form action="#" className="d-flex my-3 my-lg-none flex-row flex-nowrap">
        <label htmlFor="email" aria-label="Input the email">
          <input className="rounded-pill p-2 mr-3" type="text" id="email" placeholder="Updates in your inbox..." />
        </label>
        <Button title=" Go  " />
      </form>
      <small>
        Copyright 2020. All Rights Reserved
      </small>
    </div>
  </footer>
);

export default Footer;
