import React, { useEffect, useState } from 'react';
import './CartItems.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import util from '../utils/functions/CurrencyFormatter';

const CartItems = (props) => {
  const productId = props.data['*'];

  const quantity = props.data.location.search ? Number(props.data.location.search.split('=')[1]) : 1;

  // getting the cart state
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log(cartItems);

  const dispatch = useDispatch();

  // now that we have gotten the productId and the quantity from the props
  // we will use useEffect to make a dispatch
  // this dispatch will accept productId, quantity
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, []);

  const qty = [0, 1, 2, 3];

  const checkoutHandler = async () => {
    // navigate("/signin?redirect=shipping");
    alert('Checked out');
  };

  const subtotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  // console.log(subtotal);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="CartItems">
      <div className="CartItemsContainer">
        <div className="CartItemsHeader">
          <h1>My Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div>
            <p>Cart is empty</p>
          </div>
        ) : (
          <div className="CartDivCheckout">
            <div className="CartDiv">
              {cartItems.map((product, index) => {
                return (
                  <div key={index} className="prodInCart">
                    <div className="productImage">
                      <img src={product.image[0].image} />
                    </div>
                    <div className="productInfoDiv">
                      <div className="productNameDiv">
                        <div className="productInfoName">
                          <p>{product.name}</p>
                        </div>
                        <div className="productInfoBrand">
                          <p>
                            by {product.brand[0].brandName} | {product.brand[0].productId}
                          </p>
                        </div>
                        <div className="productFreeShipping">
                          <p>Free shipping within the DMV</p>
                        </div>
                      </div>
                      <div className="priceContainerDiv">
                        <div className="productPrice">
                          <p className="productPriceQty">
                            {util.formatCurrency((product.price * product.quantity) / 100)}
                          </p>
                          <p className="productPriceItem">{util.formatCurrency(product.price / 100)} per item</p>
                        </div>
                        <div className="productQtyPrice">
                          <select
                            value={product.quantity}
                            onChange={(e) => dispatch(addToCart(product.product, e.target.value))}
                          >
                            {qty.map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="removeButtonDiv">
                          <button onClick={() => removeFromCartHandler(product.product)} className="removeButton">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="CheckoutDiv">
              <div className="CheckoutSubtotalDiv">
                <h2 className="CheckoutSubtotalHeader">
                  Item Subtotal : {util.formatCurrency(cartItems.reduce((a, c) => a + (c.price * c.quantity) / 100, 0))}
                </h2>
              </div>

              <div className="checkoutButtonDiv">
                <button onClick={checkoutHandler} className="checkoutButton" disabled={cartItems.length === 0}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
