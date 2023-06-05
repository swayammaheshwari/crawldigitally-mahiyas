import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FaFacebookF />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <FaTwitter />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <FaGoogle />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <FaInstagram />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <FaGithub />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:<span> </span>
        <a className="text-white" href="#">
          Mahiyas
        </a>
      </div>
    </footer>
  );
};

export default Footer;
