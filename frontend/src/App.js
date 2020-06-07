import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/navigation/mainNavigation.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homePage/homePage";
function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Switch>
        <Route component={HomePage} exact />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
