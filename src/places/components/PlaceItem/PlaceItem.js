import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../shared/components/UIElements/Card/Card';
import './PlaceItem.css';

export default function PlaceItem({ image, address, description, title }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>

          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
}

PlaceItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.title,
  address: PropTypes.address,
  description: PropTypes.description
};
