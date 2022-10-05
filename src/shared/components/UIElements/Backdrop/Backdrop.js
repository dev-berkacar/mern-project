import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Backdrop.css';

export default function Backdrop({ onClick }) {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById('backdrop-hook')
  );
}

Backdrop.propTypes = {
  onCLick: PropTypes.func
};
