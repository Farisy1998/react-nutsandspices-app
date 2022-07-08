import React, { Component } from "react";
import "./productsCard.css";
import Card from "../card/card";
class ProductsCard extends Component {
  state = {
    products: [
      { id: 1, name: "Almound", price: "200" },
      { id: 2, name: "Coffee", price: "300" },
      { id: 3, name: "Dated", price: "500" },
      { id: 4, name: "Dried Kismis", price: "450" },
      { id: 5, name: "WaterMelone Seed", price: "50" },
      { id: 6, name: "Casunut", price: "250" },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <Card className="products_card bg-success">
        <span id="products_card_title">Products</span>
        <div id="products_card_card" className="card">
          <table id="products_card_table" className="table table-borderless">
            <thead className="thead-light">
              <th>ID</th>
              <th>Name</th>
              <th>Price/kg</th>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.id}</td>
                  <td>
                    <a id="product_name">
                      <span>{product.name}</span>
                    </a>
                  </td>
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
