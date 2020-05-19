import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

// When building Accept.js into your own payment form, you are only required to identify the elements in the payment form that you will process with Accept.js.
//  This usually means that you only need to know the ID attributes of those input elements.

const Cart = (props) => {
  const amount = 35;

  const [formToken, setFormToken] = useState('');

  const checkoutHandler = async () => {
    const data = await axios.get('https://roomsofa.herokuapp.com/getFormToken').then((res) => {
      console.log(res.data.token);
      setFormToken(res.data.token);
    });
    // props.history.push("/signin?redirect=shipping");
  };

  //   To prevent the secure data from reaching your server,
  // the form submission must be intercepted so that the secure details can be transmitted to Authorize.Net
  // and replaced with a payment nonce (a single-use token)
  const sendPaymentDataToAnet = () => {
    //   Accept.js includes a method to submit the secure data to Authorize.Net, but before that can be done, use the secure data to populate the required objects.
    // At a minimum, the method to submit the data requires an authentication object (authData) and either a card data object (cardData) or a bank data object (bankData).

    // The authentication data object includes only two values, your API Login ID and the Public Client Key that was referenced above.
    // The content of this object is used to tie the payment nonce to your individual Authorize.Net account.
    const authData = {};
    authData.clientKey = '3r6r5PB9H24pH5zeMkBs6ARvZU22G5R6ftDsXAuwGs96pAwu47M38HgsW23HqaNP';
    authData.apiLoginID = '8UAfh5J7kz';

    // The card data object includes all of the payment details that will be replaced by the payment nonce.
    // we can add fullName and zip later on
    const cardData = {};
    cardData.cardNumber = document.getElementById('cardNumber').value;
    cardData.month = document.getElementById('expMonth').value;
    cardData.year = document.getElementById('expYear').value;
    cardData.cardCode = document.getElementById('cardCode').value;

    // The dispatchData() method takes two inputs. One is an object which collects both the authentication and payment data.
    // The other is the JavaScript method that you will create to handle the Accept.js response.
    Accept.dispatchData(secureData, responseHandler);
  };

  function responseHandler(response) {
    if (response.messages.resultCode === 'Error') {
      var i = 0;
      while (i < response.messages.message.length) {
        console.log(response.messages.message[i].code + ': ' + response.messages.message[i].text);
        i = i + 1;
      }
    } else {
      paymentFormUpdate(response.opaqueData);
    }
  }

  function paymentFormUpdate(opaqueData) {
    document.getElementById('dataDescriptor').value = opaqueData.dataDescriptor;
    document.getElementById('dataValue').value = opaqueData.dataValue;
  }

  function paymentFormUpdate(opaqueData) {
    document.getElementById('dataDescriptor').value = opaqueData.dataDescriptor;
    document.getElementById('dataValue').value = opaqueData.dataValue;

    document.getElementById('cardNumber').value = '';
    document.getElementById('expMonth').value = '';
    document.getElementById('expYear').value = '';
    document.getElementById('cardCode').value = '';
    document.getElementById('accountNumber').value = '';
    document.getElementById('routingNumber').value = '';
    document.getElementById('nameOnAccount').value = '';
    document.getElementById('accountType').value = '';

    document.getElementById('paymentForm').submit();
  }

  return (
    <div>
      <div>Cart</div>
      <form id="paymentForm" method="POST" action="https://YourServer/PathToExistingPaymentProcessingScript">
        <input type="text" name="cardNumber" id="cardNumber" placeholder="cardNumber" /> <br />
        <input type="text" name="expMonth" id="expMonth" placeholder="expMonth" /> <br></br>
        <input type="text" name="expYear" id="expYear" placeholder="expYear" /> <br></br>
        <input type="text" name="cardCode" id="cardCode" placeholder="cardCode" /> <br></br>
        <input type="hidden" name="dataValue" id="dataValue" />
        <input type="hidden" name="dataDescriptor" id="dataDescriptor" />
        <button onClick={sendPaymentDataToAnet}>Pay</button>
      </form>
    </div>
  );
};

export default Cart;
