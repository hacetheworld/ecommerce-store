import React, { Component } from "react";
import "./mainNavigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
class MainNavigation extends Component {
  constructor() {
    super();
    this.state = {
      toggleCart: false,
    };
  }
  toggleCartHidden = () => {
    this.setState({ toggleCart: !this.state.toggleCart });
  };
  render() {
    const { currentUser } = this.props;
    return (
      <nav className="header">
        <Link className="header__logo" to="/">
          <Logo />
        </Link>

        <ul className="header__nav">
          <li className="header__nav--item">
            <Link className="header__nav--item-link" to="/shop">
              SHOP
            </Link>
          </li>
          {/* <li className="header__nav--item">
            <Link className="header__nav--item-link" to="/contact">
              CONTACT
            </Link>
          </li> */}
          {!currentUser ? (
            <li className="header__nav--item">
              <Link className="header__nav--item-link" to="/signin">
                SIGN/SIGNUP
              </Link>
            </li>
          ) : (
            <li
              className="header__nav--item"
              onClick={() => this.props.logoutUser()}
            >
              LOGOUT
            </li>
          )}

          <CartIcon toggleCartHidden={this.toggleCartHidden} />
        </ul>
        {this.state.toggleCart && (
          <CartDropdown toggleCart={this.toggleCartHidden} />
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, { logoutUser })(MainNavigation);
