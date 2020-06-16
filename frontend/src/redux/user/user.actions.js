import { UserActionTypes } from "./user.types";

import axios from "axios";
// import setAuthToken from "../../utils/set-authToken";

export const registerUser = (user) => (dispatch) => {
  axios
    .post("api/v1/user/register", user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// Login - Get User Token
export const loginUser = (user, history) => (dispatch) => {
  axios
    .post(`/api/v1/user/login`, user)
    .then((res) => {
      // save token
      const { token, user } = res.data;

      // set token to headers
      localStorage.setItem("jwtToken", token);
      // set token to headers
      //   setAuthToken(token);
      //   const decoded = jwt_decode(token);
      //   console.log(history);

      // set current user in redux store
      dispatch(setCurrentUser(user));
      history.push("/shop");
    })
    .catch((err) => console.log(err));
};

// set looged in user

export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

// set logged out user

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser(null));
};
