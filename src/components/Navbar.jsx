import React from "react";

const Navbar = () => {
  return (
    <>
      <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src="img/nail 1.png" alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ margin: "0", padding: "0" }}
            >
              <li className="nav-item" style={{ marginRight: "0px" }}>
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "0px" }}>
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "0px" }}>
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "0px" }}>
                <a
                  className="nav-link active"
                  id="navbar-elements"
                  aria-current="page"
                  href="#"
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "0px" }}>
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
