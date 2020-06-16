import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.user.currentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
