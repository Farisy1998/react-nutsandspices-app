import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./home.css";
import Carousel from "../carousel/carousel";
import Products from "../products/products";
import About from "../About/about";
import Contact from "../contact/contact";

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
                <a onClick={handleLoginModal} className="nav-link" href="">
                  <span>Login</span>
                  <Modal show={modalIsOpen} onClose={handleLoginClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form></Form>
                    </Modal.Body>
                  </Modal>
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
      <Products />
      <About />
      <Contact />
      <br />
      <br />
    </div>
  );
};

export default Home;
