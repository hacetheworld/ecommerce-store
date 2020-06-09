import React from "react";
import "./shopPage.scss";
import { Route, Switch } from "react-router-dom";
import CategoryItem from "../../components/category/category.component";
import ShopItem from "../../components/shop-items/shop-items.component";

export default function ShopPage(props) {
  return (
    <div className="shopPage">
      <CategoryItem props={props} />
      <Switch>
        <Route exact path={`${props.match.path}/:catId`} component={ShopItem} />
      </Switch>
    </div>
  );
}
