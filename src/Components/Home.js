import React from "react";
import img1 from "../images/carousel1.jpg";
import "../Components/Home.css";
import Base from "./Base";
const Home = () => {
  return (
    <Base>
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class=" h-100 w-100" src={img1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={img1} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={img1} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </Base>
  );
};

export default Home;
