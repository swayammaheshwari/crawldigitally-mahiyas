import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";

const Courses = () => {
  return (
    <>
      <h2 className="heading">OUR COURSES</h2>
      <div
        style={{ position: "relative" }}
        class="d-flex flex-wrap justify-content-center"
      >
        <Card
          style={{ width: "18rem", margin: "40px" }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/card 1.jpg"
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
        {/* <hr
          style={{
            height: "6px",
            backgroundColor: "#ff8fab",
            border: "none",
            width: "100%",
            textAlign: "left",
            marginLeft: 0,
            zIndex: -1,
            position: "absolute",
            bottom: "10opx",
          }}
        /> */}
        <hr
          style={{
            height: "10px",
            backgroundColor: "#e20cad",
            border: "none",
            width: "100%",
            textAlign: "left",
            marginLeft: 0,
            marginBottom: "175px",
            zIndex: -1,
            position: "absolute",
            bottom: "10px",
          }}
        />
      </div>
    </>
  );
};

export default Courses;
