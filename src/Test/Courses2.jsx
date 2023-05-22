import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";

const Courses2 = () => {
  return (
    <>
      <h2 class="heading">OUR COURSES</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <Card
          style={{ width: "18rem", margin: "40px" }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/services 1.png"
              style={{
                padding: "0px",
                cursor: "pointer",
                objectFit: "cover",
                height: "90%",
              }}
            />
          </a>
        </Card>
        <Card
          style={{ width: "18rem", margin: "40px" }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/card 2.jpg"
              style={{
                cursor: "pointer",
                objectFit: "cover",
                height: "93%",
              }}
            />
          </a>
        </Card>
        <Card
          style={{ width: "18rem", margin: "40px" }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/card 3.jpg"
              style={{
                cursor: "pointer",
                objectFit: "cover",
                height: "93%",
              }}
            />
          </a>
        </Card>
      </div>
    </>
  );
};

export default Courses2;
