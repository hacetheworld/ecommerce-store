import React from "react";
import "./shop-items.styles.scss";
import ShopItemCard from "../shop-item-card/shopItemCard.component";
import { connect } from "react-redux";
const ShopItem = ({ product }) => {
  return (
    <main className="products">
      {product &&
        product.items.map((item) => (
          <ShopItemCard key={item._id} item={item} />
        ))}
    </main>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.product[0],
});

export default connect(mapStateToProps)(ShopItem);
