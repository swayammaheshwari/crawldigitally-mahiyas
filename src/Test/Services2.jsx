import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "../styles/Courses.css";

const Services2 = () => {
  return (
    <>
      <h2 className="heading">OUR Services2</h2>
      <div
        style={{ position: "relative" }}
        class="d-flex flex-wrap justify-content-center"
      >
        <Card
          style={{ width: "18rem", margin: "40px", position: "relative" }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/services 1.png"
              style={{ cursor: "pointer", objectFit: "cover", height: "93%" }}
            />
          </a>

          <Card
            style={{
              position: "absolute",
              top: "30px",
              left: "30px",
              right: "30px",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.6)",
              height: "87%",
            }}
          >
            <Card.Title>Heading</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              tortor eu felis vulputate posuere.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card>
        </Card>

        <Card
          style={{ width: "18rem", padding: "0px", margin: "40px" }}
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
          style={{ width: "18rem", padding: "0px", margin: "40px" }}
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
        <hr
          className="hr-line"
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

export default Services2;
