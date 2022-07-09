import React, { Component } from "react";
import "./productsCard.css";
import Card from "../card/card";
import { getProducts } from "../Services/products";
import _ from "lodash";

class ProductsCard extends Component {
  state = {
    products: getProducts().slice(1),
  };
  render() {
    const { products } = this.state;
    return (
      <Card className="products_card bg-success">
        <span id="products_card_title">Products</span>
        <div id="products_card_card" className="card">
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

export default ProductsCard;
