import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.css';

export default function Button({
  href,
  size,
  children,
  inverse,
  danger,
  to,
  exact,
  onClick,
  disabled,
  type
}) {
  if (href) {
    return (
      <a
        className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${
          danger && 'button--danger'
        }`}
        href={href}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${
          danger && 'button--danger'
        }`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${
        danger && 'button--danger'
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.number,
  inverse: PropTypes.bool,
  danger: PropTypes.bool,
  to: PropTypes.string,
  exact: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
