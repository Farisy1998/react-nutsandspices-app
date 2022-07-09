import React, { Component } from "react";
import "./home.css";
import Carousel from "../carousel/carousel";
import CategoriesCard from "../categories/categoriesCard";
import ProductsCard from "../products/productsCard";
import About from "../About/about";
import Contact from "../contact/contact";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 navbar">
              <span href="" className="logo navbar-brand">
                Nuts And Spices
              </span>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <span>Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <span>Sign up</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Carousel />
        <CategoriesCard />
        <ProductsCard />
        <About />
        <Contact />
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
