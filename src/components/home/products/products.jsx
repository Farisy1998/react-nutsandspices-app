import React, { Component } from "react";
import Card from "../card/card";
import "./products.css";
import _ from "lodash";
import Pagination from "../pagination/pagination";
import { categorizeProducts } from "../utils/categorize";
import axios from "axios";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    currentCategory: "All",
  };
  async componentDidMount() {
    const { data: products } = await axios.get(
      "http://localhost:8080/products"
    );
    this.setState({ products });

    const { data: categories } = await axios.get(
      "http://localhost:8080/categories"
    );

    this.setState({ categories });
  }
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
            categories={this.state.categories}
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
                <tr key={product.product_id}>
                  <td>
                    <a id="product_name">
                      <span>{product.name}</span>
                    </a>
                  </td>
                  <td>{product.category_id}</td>
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
