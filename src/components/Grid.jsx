import React from "react";
import "../styles/Grid.css";
import { Col, Container, Row } from "react-bootstrap";

const Grid = () => {
  const containerStyle = {
    padding: "60px",
  };

  const colStyle = {
    position: "relative",
    padding: "0",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Container className="mobile" style={containerStyle}>
      <Row>
        <Col style={colStyle}>
          <img src="/img/Rectangle 39.png" height={"610rem"} alt="" />
          <h3 style={{ position: "absolute", bottom: "0px" }}>
            NAIL EXTENSION
          </h3>
        </Col>
        <Col style={colStyle}>
          <img src="/img/Rectangle 42.png" height={"300rem"} alt="" />
          <h3 style={{ position: "absolute", top: "260px" }}>NAIL EXTENSION</h3>
          <hr style={{ margin: "5px" }} />
          <img src="/img/Rectangle 43.png" height={"300rem"} alt="" />
          <h3 style={{ position: "absolute", bottom: "0px" }}>
            NAIL EXTENSION
          </h3>
        </Col>
        <Col style={colStyle}>
          <img src="/img/Rectangle 44.png" height={"610rem"} alt="" />
          <h3 style={{ position: "absolute", bottom: "0px" }}>
            NAIL EXTENSION
          </h3>
        </Col>
      </Row>
      <Container>
        <Row style={{ paddingTop: "10px" }}>
          <Col
            style={{
              ...colStyle,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src="/img/Rectangle 41.png" height={"335rem"} alt="" />
            <h3 style={{ position: "absolute", left: "200px", bottom: "0" }}>
              NAIL EXTENSION
            </h3>
            <img
              src="/img/Rectangle 45.png"
              height={"335rem"}
              style={{ paddingLeft: "10px" }}
              alt=""
            />
            <h3 style={{ position: "absolute", right: "140px", bottom: "0" }}>
              NAIL EXTENSION
            </h3>
          </Col>
          <Col style={colStyle}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Grid;
