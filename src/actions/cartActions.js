// the action we want to dipatch

import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

// we are saving to cookies temporaryly but the goal is to save to local storage
import Cookie from 'js-cookie';

const addToCart = (productId, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('https://roomsofa.herokuapp.com/products');
    // console.log(data.data);
    const productData = await data.data.filter(
      (data) => productId === data._id
    );
    // console.log('productData', productData[0]._id);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: productData[0]._id,
        name: productData[0].name,
        brand: productData[0].brand,
        image: productData[0].images,
        price: productData[0].price,
        productSoldOut: productData[0].isSoldOut,
        quantity,
      },

      // we will use getState to get access to the state and the Cookie.set and json.stringfy so that
      // it will save in a json format
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
  } catch (error) {}
};

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  // we will also do same for this one
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
};

export { addToCart, removeFromCart };
