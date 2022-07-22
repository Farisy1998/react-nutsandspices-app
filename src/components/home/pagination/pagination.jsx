import React from "react";

const Pagination = (props) => {
  const { categories, onCategoryChange, currentCategory } = props;
  if (categories.length === 0) return "No products inside databse";
  return (
    <nav id="pagination_nav">
      <ul id="pagination_ul" className="pagination">
        {categories.map((product) => (
          <li
            key={product.product_id}
            id="pagination_li"
            className={
              product.category_id === currentCategory
                ? "page-item active"
                : "page-item"
            }
          >
            <a
              id="pagination_a"
              className="page-link"
              onClick={() => onCategoryChange(product.category_id)}
            >
              {product.category_id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
