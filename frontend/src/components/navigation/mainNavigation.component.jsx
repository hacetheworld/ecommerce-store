import React from "react";
import "./mainNavigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CARTICON } from "../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";
export default function MainNavigation() {
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
        <li className="header__nav--item">
          <Link className="header__nav--item-link" to="/shop">
            CONTACT
          </Link>
        </li>
        <li className="header__nav--item">
          <Link className="header__nav--item-link" to="/shop">
            SIGN/SIGNUP
          </Link>
        </li>
        <div className="header__nav--cart">
          <span className="header_cart--count">7</span>
          <CARTICON className="header_cart--icon" />
        </div>
      </ul>
    </nav>
  );
}
