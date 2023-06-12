import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";

const Services2 = () => {
  return (
    <>
      <section>
        <div style={{ position: "relative", marginTop: "10px" }}>
          <center>
            <img
              src="/service.svg"
              className="service-img"
              alt=""
              style={{ maxWidth: "90%" }}
            />
            <h2
              style={{ color: "black", fontFamily: "Jost", fontWeight: "bold" }}
              className="text-center"
            >
              OUR POPULAR SERVICES
            </h2>
          </center>
          <div class="d-flex flex-wrap justify-content-center">
            <Card
              style={{
                width: "18rem",
                height: "25rem",
                padding: "0",
                margin: "40px",
              }}
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
            <hr
              className=""
              style={{
                opacity: 100,
                height: "100px",
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
            <Card
              style={{
                width: "18rem",
                height: "25rem",
                padding: "0",
                margin: "40px",
              }}
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
                padding: "0",
                margin: "40px",
              }}
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
                height: "400px",
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
      </section>
    </>
  );
};

export default Services2;
