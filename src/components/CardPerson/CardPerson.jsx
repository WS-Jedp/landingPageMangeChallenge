/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import './CardPersonStyles.scss';

const CardPerson = ({ name, message, photo }) => (
  <button type="button" aria-label={name}>
    <article className="d-flex flex-column p-5 mx-3 justify-content-center align-items-center card-person">
      <figure className="card-person__image">
        <img src={photo} alt={name} />
      </figure>
      <div className="d-flex my-4 flex-column justify-content-center align-items-center text-center card-person__content">
        <h4 className="m-4">{name || 'Some Name'}</h4>
        <q>
          {message || 'Some message'}
        </q>
      </div>
    </article>
  </button>
);

export default CardPerson;
