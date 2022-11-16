import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const ModalOverlay = ({
  className,
  style,
  onSubmit,
  headerClass,
  header,
  children,
  footer,
  footerClass,
  contentClass
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>{header}</header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

ModalOverlay.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  className: PropTypes.string,
  header: PropTypes.any,
  headerClass: PropTypes.string,
  contentClass: PropTypes.string,
  footerClass: PropTypes.string,
  onSubmit: PropTypes.func,
  footer: PropTypes.any
};

export default function Modal() {
  return <div>sa</div>;
}
