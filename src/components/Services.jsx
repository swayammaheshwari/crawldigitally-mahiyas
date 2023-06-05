import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";

const Services2 = () => {
  return (
    <>
      <div style={{ position: "relative", marginTop: "10px" }}>
        <center>
          <img src="/img/Group 43.png" className="service-img" alt="" />
        </center>
        <div class="d-flex flex-wrap justify-content-center">
          <Card
            style={{
              width: "18rem",
              height: "25rem",
              padding: "1px",
              margin: "40px",
            }}
            className="border-danger"
          >
            <a href="https://example.com">
              <Card.Img
                src="/img/service 1.jpg"
                style={{
                  cursor: "pointer",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </a>
          </Card>
          <Card
            style={{
              width: "18rem",
              height: "25rem",
              padding: "1px",
              margin: "40px",
            }}
            className="border-danger"
          >
            <a href="https://example.com">
              <Card.Img
                src="/img/service 2.jpg"
                style={{
                  cursor: "pointer",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </a>
          </Card>
          <Card
            style={{
              width: "18rem",
              height: "25rem",
              padding: "1px",
              margin: "40px",
            }}
            className="border-danger"
          >
            <a href="https://example.com">
              <Card.Img
                src="/img/service 3.jpg"
                style={{
                  cursor: "pointer",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </a>
          </Card>
          <hr
            className="hr-line"
            style={{
              opacity: 100,
              height: "300px",
              backgroundColor: "rgba(255, 194, 209, 1)",
              border: "none",
              width: "100%",
              textAlign: "left",
              marginLeft: 0,
              zIndex: -1,
              position: "absolute",
              top: "-25px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Services2;
