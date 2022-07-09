import React, { Component } from "react";
import "./App.css";
import Home from './components/home/home_page/home';

class App extends Component {
  handleCategoryChange = () => {
    console.log("Handled category change");
  };
  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
