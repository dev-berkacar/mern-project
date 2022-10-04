import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './SideDrawer.css';

export default function SideDrawer({ children }) {
  const content = <aside className="side-drawer">{children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

SideDrawer.propTypes = {
  children: PropTypes.any
};
