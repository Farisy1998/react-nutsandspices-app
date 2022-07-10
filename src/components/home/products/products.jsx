import React, { Component } from "react";
import Card from "../card/card";
import "./products.css";
import _ from "lodash";
import Pagination from "../pagination/pagination";
import { categorizeProducts } from "../utils/categorize";
import { getProducts } from "../Services/products";

class Products extends Component {
  state = {
    products: getProducts(),
    currentCategory: "All",
  };
  handleCategoryChange = (category) => {
    this.setState({ currentCategory: category });
  };
  render() {
    const { products: allProducts, currentCategory } = this.state;
    const products = categorizeProducts(allProducts, currentCategory);
    return (
      <Card className="card bg-primary">
        <span id="card_title">Categories</span>
        <div id="card_categories" className="card bg-light">
          <Pagination
            className="pagination"
            categories={this.state.products}
            onCategoryChange={this.handleCategoryChange}
            currentCategory={this.state.currentCategory}
          />
        </div>
        <span id="card_title">Products</span>
        <div id="card_products" className="card">
          <table id="products_card_table" className="table table-borderless">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price/kg</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <a id="product_name">
                      <span>{product.name}</span>
                    </a>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }
}

export default Products;
