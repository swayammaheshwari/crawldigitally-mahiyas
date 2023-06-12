import React from "react";
import { ImLocation2 } from "react-icons/im";
import "../styles/Maps.css";
import { Container, Row, Col } from "react-bootstrap";

function Maps() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImLocation2 style={{ fontSize: "48px", color: "#CE136C" }} />
      </div>
      <h2
        style={{ color: "black", fontFamily: "Jost", fontWeight: "bold" }}
        className="text-center"
      >
        REACH US AT
      </h2>
      <Container className="map-container">
        <Row>
          <Col sm={12} lg={6} className="map-col">
            <iframe
              title="example-map-1"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.574174414328!2d-96.7977337!3d32.7801013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80c8c117c0f9f3d1!2sExample+Location+1!5e0!3m2!1sen!2sus!4v1551833526892"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <div
              id="div-map"
              className="card-footer bg-secondary"
              style={{ display: "grid", placeItems: "center" }}
            >
              <h3>Mahiya’s The Beauty Academy</h3>
            </div>
          </Col>
          <Col sm={12} lg={6} className="map-col">
            <iframe
              title="example-map-2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.574174414328!2d-96.7977337!3d32.7801013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80c8c117c0f9f3d1!2sExample+Location+2!5e0!3m2!1sen!2sus!4v1551833526892"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <div
              id="div-map"
              className="card-footer bg-secondary"
              style={{ display: "grid", placeItems: "center" }}
            >
              <h3>The Nail Bar</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maps;
