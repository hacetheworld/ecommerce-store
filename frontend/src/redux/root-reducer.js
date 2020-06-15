import { combineReducers } from "redux";

import productReducer from "./producs/products.reducer";
import CartReducer from "./cart/cart.reducer";

export default combineReducers({
  products: productReducer,
  cart: CartReducer,
});
