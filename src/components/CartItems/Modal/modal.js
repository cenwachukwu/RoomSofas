import React, { useEffect, useState } from 'react';
import { FormContainer, FormComponent } from 'react-authorize-net';
import './modal.scss';

const Modal = (props) => {
  console.log(props);

  const subtotal = props.cartItems.reduce(
    (a, c) => a + (c.price * c.quantity) / 100,
    0
  );
  console.log(subtotal);

  const onErrorHandler = (response) => {
    alert('erro');
  };

  const onSuccessHandler = (response) => {
    // Process API response on your backend...
    alert('erro');
  };

  //   we have to move this to env
  const apiLoginId = '8UAfh5J7kz';
  //   console.log(apiLoginId);
  const clientKey =
    '3r6r5PB9H24pH5zeMkBs6ARvZU22G5R6ftDsXAuwGs96pAwu47M38HgsW23HqaNP';

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: props.openModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.openModal ? '1' : '0',
      }}
    >
      <div className="modal-header">
        <span className="close-modal-btn" onClick={props.handleCloseModal}>
          ×
        </span>
        <div>
          <div className="modalBox">
            <p>Inside the modal</p>
            <FormContainer
              environment="production"
              onError={onErrorHandler}
              onSuccess={onSuccessHandler}
              amount={subtotal}
              component={FormComponent}
              clientKey={clientKey}
              apiLoginId={apiLoginId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
