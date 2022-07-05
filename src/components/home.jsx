import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://images.pexels.com/photos/8758420/pexels-photo-8758420.jpeg?cs=srgb&dl=pexels-anna-tarazevich-8758420.jpg&fm=jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
