import { productActionTypes } from "./products.actionTypes";
import axios from "axios";
export const getProductByCategory = (category) => (dispatch) => {
  axios
    .get(`/api/v1/product/${category}`)
    .then((res) => {
      dispatch({
        type: productActionTypes.GET_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
