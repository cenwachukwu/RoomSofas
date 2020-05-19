import React from 'react';
import './Container.scss';
import { Link } from '@reach/router';
import Hamburger from '../Hamburger/Hamburger';

const Container = () => {
  return (
    <div className="MobileNav">
      <div className="MobileNav__container">
        <div className="MobileNav__logo">
          {/* <Link to="/" className="MobileNav__logoLink">
            <h4 className="homeLogo">Room Sofas</h4>
          </Link> */}
        </div>
        <div>
          <div>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
