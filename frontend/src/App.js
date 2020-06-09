import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/navigation/mainNavigation.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homePage/homePage";
import ShopPage from "./pages/shopPage/shopPage";
function App() {
  return (
    <div className="App">
      <MainNavigation />
      <div className="main">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
