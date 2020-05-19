import React from 'react';
import { Link } from '@reach/router';
import './Hamburger.scss';

const Hamburger = () => {
  return (
    <div>
      <div className="Hamburger__wrapper">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div className="hamburger-lines"></div>
        </div>
        <div className="fixednavbar">
          <div className="xyz">
            <div>
              <ul>
                <li className="mobileNavli">
                  <Link to="/" className="mobileNavLink">
                    Home
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/ViewAll" className="mobileNavLink">
                    View All
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/Chair" className="mobileNavLink">
                    Chair
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/AccentChair" className="mobileNavLink">
                    Accent Chair
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/SofaandLoveseat" className="mobileNavLink">
                    Sofa & Loveseat
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/Recliner" className="mobileNavLink">
                    Recliners
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/Sectionals" className="mobileNavLink">
                    Sectionals
                  </Link>
                </li>
                <li className="mobileNavli">
                  <Link to="/" className="mobileNavLink" className="mobileNavLink">
                    Contact
                  </Link>
                </li>
                <li className="noBorder">
                  <Link to="/cart" className="mobileNavLink">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
