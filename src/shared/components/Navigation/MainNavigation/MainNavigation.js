import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from '../NavLinks/NavLinks';
import MainHeader from '../MainHeader/MainHeader';
import './MainNavigation.css';
import SideDrawer from '../SideDrawer/SideDrawer';

export default function MainNavigation() {
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
