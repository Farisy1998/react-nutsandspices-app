import React, { Component } from "react";
import Card from "../card/card";
import './carousel.css';

class Carousel extends Component {
  state = {
    carouselImgs: [
      "https://images.pexels.com/photos/7956510/pexels-photo-7956510.jpeg?auto=compress&cs=tinysrgb&w=2300&h=1900&dpr=1",
      "https://images.pexels.com/photos/3997459/pexels-photo-3997459.jpeg?auto=compress&cs=tinysrgb&w=2300&h=1900&dpr=1",
      "https://images.pexels.com/photos/4085266/pexels-photo-4085266.jpeg?auto=compress&cs=tinysrgb&w=2300&h=1900&dpr=1",
    ],
  };
  render() {
    const { carouselImgs } = this.state;
    return (
      <Card className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={carouselImgs[0]}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={carouselImgs[1]}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={carouselImgs[2]}
                alt="Third slide"
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Carousel;
