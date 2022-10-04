import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

export default function Avatar({ image, alt, style, className, width }) {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
