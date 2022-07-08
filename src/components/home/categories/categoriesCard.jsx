import React, { Component } from "react";
import Card from "../card/card";
import "./categoriesCard.css";

class CategoriesCard extends Component {
  state = {
    productCategories: [
      { id: 1, value: "Nuts" },
      { id: 2, value: "Spices" },
      { id: 3, value: "Dry Fruits" },
      { id: 4, value: "Herbs" },
      { id: 5, value: "Dieting Seeds" },
    ],
  };
  render() {
    const { productCategories } = this.state;
    return (
      <Card className="categories_card bg-info">
        <span id="categories_card_title">Categories</span>
        <div className="card bg-primary">
          <ul href="#" id="ul" className="nav">
            {productCategories.map((category) => (
              <li id="li" className="nav-item">
                <a id="a" className="nav-link">
                  <span id="span">{category.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    );
  }
}

export default CategoriesCard;
