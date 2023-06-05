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
import Services2 from "./Test/Services2";
import Nav2 from "./Test/Nav2";
import Grid from "./components/Grid";
import Content from "./components/Content";
import Content2 from "./components/Content2";

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
      <Navbar />
      <Grid />
      <Content2 />
      {/* <Content /> */}
      <Footer />
    </>
  );
};

export { App, Test };
