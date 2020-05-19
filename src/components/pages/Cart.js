import React, { useState } from 'react';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  return (
    <div className="Cart">
      <CartItems data={props} />
    </div>
  );
};

export default Cart;
