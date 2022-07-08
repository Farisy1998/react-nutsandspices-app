import React, { Component } from "react";
import './nav.css';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 navbar">
            <span href="" className="logo navbar-brand text-dark">
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
    );
  }
}

export default Nav;
