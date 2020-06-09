import React from "react";
import "./shopPage.scss";
import { Route, Switch } from "react-router-dom";
import CategoryItem from "../../components/category/category.component";
import ShopItem from "../../components/shop-items/shop-items.component";

export default function ShopPage(props) {
  return (
    <div className="shopPage">
      <CategoryItem props={props} />
      {/* <div>
        {props.match.isExact ? (
          <h1>Select any category</h1>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div> */}
      <Switch>
        {/* <Route exact path={`${props.match.path}/`} component={ShopItem} /> */}
        <Route exact path={`${props.match.path}/:catId`} component={ShopItem} />
      </Switch>
    </div>
  );
}
