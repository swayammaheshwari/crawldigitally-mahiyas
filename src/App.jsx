import React from "react";
import Navbar from "./components/Navbar";
import Carousal from "./components/Carousal";
import About from "./components/about";
import Services from "./components/services";
import Courses from "./components/Courses";
import Testimonial from "./components/testimonial";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Courses2 from "./Test/Courses2";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <About />
      <Services />
      <Courses />
      <Testimonial />
      <Maps />
      <Contact />
      <Footer />
    </>
  );
};

const Test = () => {
  return (
    <>
      <Courses2 />
      <h2>dfgdf</h2>
    </>
  );
};

export { App, Test };
