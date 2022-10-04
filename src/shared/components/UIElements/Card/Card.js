import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export default function Card({ className, style, children }) {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  className: PropTypes.string
};
