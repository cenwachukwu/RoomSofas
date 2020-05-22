import React, { useEffect, useState } from 'react';
import './Payment.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { savePayment } from '../../actions/cartActions';
import CheckoutSteps from '../Checkout/CheckoutSteps';

const Payment = (props) => {
  const dispatch = useDispatch();

  const [payment, setPayment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ payment }));
    navigate('/placeorder');
  };

  return (
    <div className="Payment">
      <CheckoutSteps step1 step2 step3 />
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            <input
              type="radio"
              name="paymentMethod"
              id="paymentMethod"
              value="paypal"
              onChange={(e) => setPayment(e.target.value)}
            />

            <label htmlFor="paymentMethod">Paypal</label>
          </li>

          <li className="submitButton">
            <button type="submit">Continue</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Payment;
