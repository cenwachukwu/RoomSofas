import React, { useEffect, useState } from 'react';
import './shipping.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '@reach/router';
import { saveShipping } from '../../actions/cartActions';
import CheckoutSteps from '../Checkout/CheckoutSteps';

const Shipping = (props) => {
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const dispatch = useDispatch();
  //   const userRegister = useSelector((state) => state.userRegister);
  //   const { loading, userInfo, error } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    alert('paid');
    dispatch(saveShipping(address, address2, city, state, zip));
  };

  return (
    <div className="Shipping">
      <CheckoutSteps step1 step2 />
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your street address"
            />
          </li>

          <li>
            <label htmlFor="address2">Address 2 (optional)</label>
            <input
              type="text"
              name="address2"
              id="address2"
              onChange={(e) => setAddress2(e.target.value)}
              placeholder="Apt, suite, or floor number"
            />
          </li>

          <li>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} placeholder="City" />
          </li>

          <li>
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="state" onChange={(e) => setState(e.target.value)} placeholder="State" />
          </li>

          <li>
            <label htmlFor="zip">Zip Code</label>
            <input type="text" name="zip" id="zip" onChange={(e) => setZip(e.target.value)} placeholder="Zip Code" />
          </li>

          <li className="submitButton">
            <button type="submit">Continue</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Shipping;
