import React from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./redux/user/user.actions";
import store from "./redux/store";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/navigation/mainNavigation.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homePage/homePage";
import ShopPage from "./pages/shopPage/shopPage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import PrivateRoute from "./Private-route";
if (localStorage.jwtToken) {
  // set auth tioken
  // setAuthToken(localStorage.jwtToken);
  // decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <div className="main">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <PrivateRoute path="/checkout" component={CheckoutPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
