import React from "react";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const CartDropdown = ({ cartItems, history, toggleCart }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems && cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem._id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCart();
      }}
    >
      GO TO CHECKOUT{" "}
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(withRouter(CartDropdown));
