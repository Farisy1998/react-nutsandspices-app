import React, { Component } from "react";
import Home from "./home";
import "./navbar.css";
import About from "./about";
import Contact from "./contact";

class NavBar extends Component {
  state = {
    id: ["home", "about", "contact"],
    item: <Home />,
  };
  handleHomeClick = () => {
    this.setState({ item: <Home /> });
  };
  handleAboutClick = () => {
    this.setState({ item: <About /> });
  };

  render() {
    const { id, item } = this.state;
    const head = <head></head>;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="title">Nuts And Spices</span>
          <ul className="navbar-nav mr-auto">
            <li id={id[0]} className="nav-item">
              <button
                className="btn btn-light"
                onClick={() => this.handleHomeClick()}
              >
                Home
              </button>
            </li>
            <li id={id[1]} className="nav-item">
              <button
                className="btn btn-light"
                onClick={() => this.handleAboutClick()}
              >
                About
              </button>
            </li>
            <li id={id[2]} className="nav-item">
              <button className="btn btn-light">Contact</button>
            </li>
          </ul>
        </nav>
        <div className="body">{item}</div>
      </React.Fragment>
    );
  }
}

export default NavBar;
