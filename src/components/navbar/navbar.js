import React from 'react';
import './navbar.scss';
import { Link } from '@reach/router';
import Dropdown from '../DropDown/dropdown';

const Navbar = (props) => {
  // console.log(props.user);
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div className="logo">
          <div>
            <Link to="/">Room</Link>
          </div>
          <div className="borderTop">
            <Link to="/">Sofas</Link>
          </div>
        </div>

        <ul className="navbarCategoryLinks">
          <li>
            <Dropdown />
          </li>
          <li>
            <Link to="/Recliner">Recliners</Link>
          </li>
          <li>
            <Link to="/Sectionals">Sectionals</Link>
          </li>
        </ul>

        <div className="navbarUserLinks">
          <div>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <p>cart</p>
            </Link>
          </div>
          {props.user ? (
            <div>
              <Link to="/profile">
                <i className="far fa-user"></i>
                <p>{props.user.name}</p>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/signin">
                <i className="far fa-user"></i>
                <p>account</p>
              </Link>
            </div>
          )}
          {/* <div>
            <Link to="/signin">
              <i className="far fa-user"></i>
              <p>account</p>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
