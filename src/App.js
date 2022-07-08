import React from "react";
import "./App.css";
import Nav from "./components/home/nav";
import Carousel from "./components/home/carousel/carousel";
import CategoriesCard from "./components/home/categories/categoriesCard";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Carousel />
      <CategoriesCard />
    </React.Fragment>
  );
}

export default App;
