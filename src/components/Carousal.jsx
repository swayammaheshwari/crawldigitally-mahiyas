import React from "react";
import "../styles/Carausal.css";
import Carousel from "react-bootstrap/Carousel";

const Carousal = () => {
  return (
    <>
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="/img/carousal-img.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="/img/carousal-img.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="/img/carousal-img.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousal;
