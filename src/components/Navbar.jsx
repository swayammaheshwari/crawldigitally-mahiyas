import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img src="img/logo_main.png" alt="" />
      </div>
      <nav id="navbar" className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <button
            style={{ backgroundColor: "black", opacity: "0.4" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center"
              style={{ margin: "0", padding: "0" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  REVIEW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
