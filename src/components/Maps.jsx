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
        style={{
          marginBottom: "20px",
        }}
        className="text-center h1-responsive"
      >
        REACH US AT
      </h2>
      <Container className="map-container">
        <Row>
          <Col sm={12} lg={6} className="map-col">
            <iframe
              id="frame"
              title="example-map-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1969772566285!2d82.18051357515965!3d22.08029317984537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b910643ff11%3A0x862f4afa67fc5f3d!2sMahiyaa&#39;s%20Nail%20Design%20Academy%20and%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1686814812591!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              //
            ></iframe>
            <div
              id="div-map"
              className="card-footer bg-secondary rounded-bottom"
              style={{ display: "grid", placeItems: "center" }}
            >
              <h3 style={{ margin: "5px 0" }}>Mahiyaa’s The Beauty Academy</h3>
            </div>
          </Col>
          <Col sm={12} lg={6} className="map-col">
            <iframe
              id="frame"
              title="example-map-1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.295360852694!2d82.15132391495075!3d22.076534385440194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b75027e6881%3A0xefd870c16197600e!2sMahiyaas%20The%20Nail%20Bar!5e0!3m2!1sen!2sin!4v1686814602990!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
              id="div-map"
              className="card-footer bg-secondary rounded-bottom"
              style={{ display: "grid", placeItems: "center" }}
            >
              <h3 style={{ margin: "5px 0" }}>The Nail Bar</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maps;
