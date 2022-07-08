import React from "react";
import "./App.css";
import Nav from "./components/home/nav";
import Carousel from "./components/home/carousel/carousel";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Carousel />
    </React.Fragment>
  );
}

export default App;
