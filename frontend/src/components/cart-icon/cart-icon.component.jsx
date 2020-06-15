import React, { Component } from "react";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
class CartIcon extends Component {
  render() {
    const { toggleCartHidden, cartItemsCount } = this.props;
    return (
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsCount}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItemsCount: selectCartItemsCount(state.cart.cartItems),
});

export default connect(mapStateToProps)(CartIcon);
