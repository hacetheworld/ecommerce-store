import { combineReducers } from "redux";

import productReducer from "./producs/products.reducer";
import CartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  products: productReducer,
  cart: CartReducer,
  user: userReducer,
});
