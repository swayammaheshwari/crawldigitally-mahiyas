import React from "react";

const Nav2 = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "#ff8fab" }}
      >
        <div class="container-fluid">
          <img class="logo-navbar" src="/img/logo.png" alt="" />
          <button
            style={{ backgroundColor: "#e76b8a" }}
            id="nav-toggle-button"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav custom-ul-style justify-content-center">
              <li class="nav-item">
                <a
                  class="nav-link active nav-item1"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-item1" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-item1" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-item1" href="#">
                  Our Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-item1" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav2;
