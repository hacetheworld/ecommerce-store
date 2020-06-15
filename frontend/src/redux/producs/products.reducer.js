import { productActionTypes } from "./products.actionTypes";

const INITAL_STATE = {
  product: [],
};
const productReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
