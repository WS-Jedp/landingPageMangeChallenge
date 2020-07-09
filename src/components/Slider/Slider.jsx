/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import React from 'react';

// Styles
import './SliderStyles.scss';

// Components
import CardPerson from '../CardPerson/CardPerson';
import Button from '../Button/Button';

// Images
import ImgAliBravo from '../../assets/images/avatar-ali.png';
import ImgAnisha from '../../assets/images/avatar-anisha.png';
import ImgRichard from '../../assets/images/avatar-richard.png';
import ImgShanai from '../../assets/images/avatar-shanai.png';

// eslint-disable-next-line react/prop-types
const Slider = ({ title }) => {
  const [currentPositionSlider, setCurrentPositionSlider] = React.useState(0);
  React.useEffect(() => {
    const btnLeft = document.getElementsByClassName('slider__button--left')[0];
    btnLeft.setAttribute('disabled', true);
    btnLeft.classList.add('disabled');
  }, []);

  const handleSlider = (goTo) => {
    const btnSliderRight = document.getElementsByClassName('slider__button--right')[0];
    const btnSliderLeft = document.getElementsByClassName('slider__button--left')[0];
    const posSlider = document.getElementById('slider__cards');
    if (goTo > 0) {
      setCurrentPositionSlider(currentPositionSlider - 30);
      posSlider.style.left = `${currentPositionSlider - 30}%`;
    } else {
      setCurrentPositionSlider(currentPositionSlider + 30);
      posSlider.style.left = `${currentPositionSlider + 30}%`;
    }

    if (currentPositionSlider <= -30) {
      btnSliderRight.setAttribute('disabled', true);
      btnSliderRight.classList.add('disabled');
    } else {
      btnSliderRight.removeAttribute('disabled');
      btnSliderRight.classList.remove('disabled');
    }

    if (currentPositionSlider <= -20) {
      btnSliderLeft.removeAttribute('disabled');
      btnSliderLeft.classList.remove('disabled');
    } else {
      btnSliderLeft.setAttribute('disabled', true);
      btnSliderLeft.classList.add('disabled');
    }
  };
  return (
    <article className="d-flex flex-column py-5 my-5 justify-content-center align-items-center mx-auto slider">
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-home-down">
        <g fill="hsl(12, 88%, 59%)" fillRule="evenodd" opacity=".071" transform="translate(-171 -373)">
          <rect width="310.431" height="708" x="205" y="410" rx="155.215" transform="scale(1 -1) rotate(-45 -1484.244 0)" />
        </g>
      </svg>
      <h2 className="py-5">{title || 'Some title pls'}</h2>

      <button type="button" aria-label="button Slider Back" onClick={() => handleSlider(0)} className="slider__buttons slider__button--left">
        <i className="fas fa-chevron-left" />
      </button>
      <button type="button" aria-label="button Slider Forward" onClick={() => handleSlider(1)} className="slider__buttons slider__button--right">
        <i className="fas fa-chevron-right" />
      </button>
      <div className="d-flex flex-row slider__cards" id="slider__cards">
        <CardPerson
          name="Anisha Li"
          message='"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."'
          photo={ImgAnisha}
        />
        <CardPerson
          name="Ali Bravo"
          message='"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."'
          photo={ImgAliBravo}
        />
        <CardPerson
          name="Richard Watts"
          message='"Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'
          photo={ImgRichard}
        />

        <CardPerson
          name="Shanai Gough"
          message='"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."'
          photo={ImgShanai}
        />
      </div>

      <Button title="Get Started" />
    </article>
  );
};

export default Slider;
