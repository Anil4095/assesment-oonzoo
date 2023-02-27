import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
  cart: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(state)
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const cartReducer = (state=initialState, {type, payload}) => {
switch (type) {
  case ActionTypes.ADD_TO_CART:
    state.cart.push(payload)
    return {...state, cart:[...state.cart]}
  default:
    return state
}
}