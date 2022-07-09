import React, { Component } from "react";
import Card from "../card/card";
import "./categoriesCard.css";
import { getProducts } from "../Services/products";
import _ from "lodash";
import Pagination from "../product_pagination/pagination";

class CategoriesCard extends Component {
  state = {
    products: getProducts().filter((product) => product.category),
    currentCategory: "All",
  };
  handleCategoryChange = (product) => {
    this.setState({ currentCategory: product });
  };
  render() {
    const { products, currentCategory } = this.state;
    return (
      <Card className="card bg-primary">
        <span id="card_title">Categories</span>
        <div id="card_categories" className="card bg-light">
          <Pagination
            className="pagination"
            categories={products}
            onCategoryChange={this.handleCategoryChange}
            currentCategory={currentCategory}
          />
        </div>
      </Card>
    );
  }
}

export default CategoriesCard;
