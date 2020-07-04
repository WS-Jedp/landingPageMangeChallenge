/* eslint-disable no-undef */
import React from 'react';

// Styles
import './HomeStyles.scss';

// Images
import ImgStas from '../assets/images/illustration-intro.svg';

// Compoenents
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Advantage from '../components/Advantage/Advantage';
import Slider from '../components/Slider/Slider';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

class Home extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 70) {
        const advantages = document.getElementsByClassName('advantage');
        advantages[0].classList.add('animate-to-right');
        advantages[1].classList.add('animate-to-right');
        advantages[2].classList.add('animate-to-right');
      }
    });

    const introImg = document.getElementsByClassName('introduction__image')[0];
    const introCont = document.getElementsByClassName('introduction__content')[0];

    introImg.classList.add('animate-to-left');
    introCont.classList.add('animate-to-right');
  }

  render() {
    return (
      <section>
        <Header />

        {/* Background image */}
        <svg xmlns="http://www.w3.org/2000/svg" className="bg-home">
          <g fill="hsl(12, 88%, 59%)" fillRule="evenodd" opacity=".071" transform="translate(-171 -373)">
            <rect width="310.431" height="708" x="1269" y="7" rx="155.215" transform="scale(1 -1) rotate(-45 552.684 0)" />
          </g>
        </svg>
        <article id="main" className="d-flex mx-auto mb-5 mb-md-none flex-column flex-md-row-reverse p-none p-md-4 justify-content-between align-items-center introduction">

          <figure className="col-12 col-md-6 d-flex justify-content-center align-items-center introduction__image">
            <img src={ImgStas} alt="Stats from this" />
          </figure>

          <div className="col-12 col-md-5 introduction__content">
            <Content
              title="  Bring everyone together to build better products."
              content="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
              heading="h1"
              button="true"
              buttonTitle="Get Started"
            />
          </div>
        </article>

        <article className="d-flex mx-auto mt-5 mt-md-none flex-column flex-md-row p-none p-md-4 justify-content-between align-items-start advantages">
          <div className="col-12 col-md-5">
            <Content
              title="What’s different about Manage?"
              content="Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams."
              heading="h2"
            />
          </div>

          <div className="advantages__list col-12 col-md-6">
            <Advantage
              index="01"
              title="Track company-wide progress"
              content="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
            />
            <Advantage
              index="02"
              title="Advanced built-in reports"
              content="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
            />
            <Advantage
              index="03"
              title="Everything you need in one place"
              content="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
            />
          </div>
        </article>

        <Slider title="What they'v said" />

        <Banner title="Simplify how your team works today" />

        <Footer />
      </section>
    );
  }
}

export default Home;
