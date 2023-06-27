import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";
import HR from "./HR";

const Services = () => {
  return (
    <>
      <section>
        <div style={{ position: "relative", marginTop: "10px" }}>
          <center>
            <img
              src="/service.svg"
              className="service-img"
              alt=""
              style={{ maxWidth: "90%", marginBottom: "20px" }}
            />
            <h2 className="text-center h1-responsive">OUR POPULAR SERVICES</h2>
          </center>
          <div class="d-flex flex-wrap justify-content-center">
            <Card
              id="cards1"
              style={{
                width: "18rem",
                height: "25rem",
                padding: "0",
                margin: "40px",
                border: "none",
              }}
            >
              <a href="/services">
                <Card.Img
                  src="/img/service 1.jpg"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
              </a>
            </Card>
            <HR top={"250px"} />
            <Card
              id="cards2"
              style={{
                width: "18rem",
                height: "25rem",
                padding: "0",
                margin: "40px",
                border: "none",
              }}
            >
              <a href="/services">
                <Card.Img
                  src="/img/service 2.jpg"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
              </a>
            </Card>
            <HR top={"730px"} />

            <Card
              id="cards3"
              style={{
                width: "18rem",
                height: "25rem",
                padding: "0",
                margin: "40px",
                border: "none",
              }}
            >
              <a href="/services">
                <Card.Img
                  src="/img/service 3.jpg"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
              </a>
            </Card>
            <HR bottom={"90px"} />
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

export default Services;
