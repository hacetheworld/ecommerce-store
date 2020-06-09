import React, { Component } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
class CartIcon extends Component {
  render() {
    const { toggleCartHidden } = this.props;
    return (
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">7</span>
      </div>
    );
  }
}

export default CartIcon;
