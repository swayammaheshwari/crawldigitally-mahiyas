import React from "react";
import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarApp = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
          background: "#FFF3F3",
        }}
      >
        <img src="img/logo_main.png" alt="" />
      </div>
      <Navbar
        className="navbar"
        style={{ backgroundColor: "#ff8fab" }}
        expand="lg"
      >
        <Container style={{ padding: "0px" }}>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginRight: "20px" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ padding: "0", margin: "0" }}
          >
            <Nav
              className="me-auto"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <Nav.Link href="/" style={{ color: "white", margin: "0 40px" }}>
                HOME
              </Nav.Link>
              <Nav.Link
                href="#about"
                style={{ color: "white", margin: "0 40px" }}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="/services"
                style={{ color: "white", margin: "0 40px" }}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                href="#courses"
                style={{ color: "white", margin: "0 40px" }}
              >
                COURSES
              </Nav.Link>
              <Nav.Link
                href="#contact"
                style={{ color: "white", margin: "0 40px" }}
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarApp;
