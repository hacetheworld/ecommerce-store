import React, { Component } from "react";
import "./shop-items.styles.scss";
import SHOP_DATA from "./shop.data.js";
import ShopItemCard from "../shop-item-card/shopItemCard.component";
class ShopItem extends Component {
  constructor() {
    super();
    this.state = {
      SHOP_DATA,
    };
  }
  render() {
    const routeName = this.props.match.params.catId;
    const currentCategoryItem = this.state.SHOP_DATA.filter(
      (item) => item.routeName === routeName
    );
    return (
      <main className="products">
        {currentCategoryItem[0].items.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </main>
    );
  }
}

export default ShopItem;
