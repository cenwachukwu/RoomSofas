// this is where we manage our state

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    //   so when we add item items to the cart
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    //   when we remove items from the cart
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}

export { cartReducer };
