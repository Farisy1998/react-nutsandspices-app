import React from "react";

const Pagination = (props) => {
  const { categories, onCategoryChange, currentCategory } = props;
  if (categories.length === 0) return "No products in side databse";
  console.log(currentCategory);
  return (
    <nav id="pagination_nav">
      <ul id="pagination_ul" className="pagination">
        {categories.map((product) => (
          <li
            key={product.id}
            id="pagination_li"
            className={
              product.category === currentCategory
                ? "page-item active"
                : "page-item"
            }
          >
            <a
              id="pagination_a"
              className="page-link"
              onClick={() => onCategoryChange(product.category)}
            >
              {product.category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
