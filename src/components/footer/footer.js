import React from 'react';
import { Link } from '@reach/router';
import './footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-div">
        <div className="FooterIconsDiv">
          <div>
            <Link to="/">Home</Link>
          </div>

          <div>
            <Link to="/profile">Account</Link>
          </div>

          <div>
            <Link to="#">Contact Us</Link>
          </div>

          <div>
            <Link to="/cart">Cart</Link>
          </div>
        </div>

        <div className="FooterCopyRightDiv">
          <p>
            All rights reserved
            <span>
              <i className="fas fa-copyright"></i>
            </span>
            2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
