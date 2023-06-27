import React from "react";
import "../styles/Carausal.css";
import Carousel from "react-bootstrap/Carousel";

const Carousal = () => {
  return (
    <>
      <Carousel className="custom-carousel" slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="/img/carousal-img1.jpeg"
            alt="First slide"
            height={"435px"}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="/img/carousal-img2.jpeg"
            alt="Second slide"
            height={"435px"}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="/img/carousal-img3.jpeg"
            alt="Third slide"
            height={"435px"}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousal;
