import React, { useState } from "react";
import "./home.css";
import Button from 'react-bootstrap/Button';
import Carousel from "../carousel/carousel";
import Products from "../products/products";
import About from "../About/about";
import Contact from "../contact/contact";
import Login from "../Login/login";

const Home = () => {
  const [modalIsOpen, setOpen] = useState(false);
  const handleLoginModal = () => setOpen(true);
  const handleLoginClose = () => setOpen(false);
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
                <Button
                  onClick={handleLoginModal}
                  className="button"
                  variant="primary"
                >
                  <span>Login</span>
                  <Login isShow={modalIsOpen} />
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  onClick={handleLoginModal}
                  className="button"
                  variant="success"
                >
                  <span>Sign In</span>
                  <Login isShow={modalIsOpen} />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Carousel />
      <Products />
      <About />
      <Contact />
      <br />
      <br />
    </div>
  );
};

export default Home;
