import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '../../../shared/components/UIElements/Card/Card';
import Avatar from '../../../shared/components/UIElements/Avatar/Avatar';
import './UserItem.css';

export default function UserItem({ image, name, placeCount, id }) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

UserItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  placeCount: PropTypes.number,
  id: PropTypes.string
};
