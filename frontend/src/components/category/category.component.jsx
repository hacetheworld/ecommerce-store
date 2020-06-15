import React from "react";
import "./category.styles.scss";
import { Link } from "react-router-dom";
import { CAT_NAMES } from "./cat_data";
import { connect } from "react-redux";
import { getProductByCategory } from "../../redux/producs/products.action";
function CategoryItem(props) {
  const categories = CAT_NAMES;
  return (
    <div className="category">
      <h1 className="category__title">Category</h1>
      <aside className="category__item">
        {categories.map((cat, idx) => (
          <Link
            className="category__item--link"
            key={idx}
            to={`/shop/${cat}`}
            onClick={() => props.getProductByCategory(cat)}
          >
            {cat}
          </Link>
        ))}
      </aside>
    </div>
  );
}

export default connect(null, { getProductByCategory })(CategoryItem);
