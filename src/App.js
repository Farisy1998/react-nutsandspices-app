import React from "react";
import "./App.css";
import Nav from "./components/home/navbar/nav";
import Carousel from "./components/home/carousel/carousel";
import CategoriesCard from "./components/home/categories/categoriesCard";
import ProductsCard from "./components/home/products/productsCard";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Carousel />
      <CategoriesCard />
      <ProductsCard />
    </React.Fragment>
  );
}

export default App;
