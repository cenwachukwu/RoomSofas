import React, { useState, useRef, useEffect } from 'react';
import './AccountDropDown.scss';
import { Link } from '@reach/router';

const AccountDropdown = () => {
  const activatorRef = useRef(null);

  const dropdownListRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (e) => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (e) => {
    console.log(e.code);
    // Code for esc is 27
    if (e.code === 27 && isOpen) {
      setIsOpen(false);
    }
  };

  //   if what the user is clicking isnt in the dropdown, close the dropdown
  const clickOutsideHandler = (e) => {
    //   event.target
    if (dropdownListRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };

  //   we'll use useEffect toggled with isOpen to send focus to the first element in the dropdown
  //   we'll also use it to be able to close the dropdown by clicking outside of it. we will achieve this using a document.addEventListener
  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector('a').focus();
      document.addEventListener('mousedown', clickOutsideHandler);
    } else {
      // if it's not open and to prevent a memory leak, we remove eventListener
      document.removeEventListener('mousedown', clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className="dropdown-wrap" onKeyUp={keyHandler}>
      {/* button is our activator */}
      <button
        aria-haspopup="true"
        aria-controls="dropdown1"
        onClick={clickHandler}
        ref={activatorRef}
        className="dropdown-activator"
      >
        <i className="far fa-user"></i>
      </button>
      <ul
        id="dropdown1"
        ref={dropdownListRef}
        // we now say if isOpen is true, we want to add an active class but if its false, dont add a class
        className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
        // adding role="list" helps us make sure that assistive technology eg screen readers will annouce how many items are in the list
        role="list"
      >
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;
