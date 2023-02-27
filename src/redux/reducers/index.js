import { combineReducers } from "redux";
import { cartReducer, productsReducer, selectedProductsReducer } from "./productsReducers";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
});
export default reducers;