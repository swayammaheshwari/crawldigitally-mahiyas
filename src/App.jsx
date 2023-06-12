import React from "react";
import Carousal from "./components/Carousal";
import About from "./components/about";
import Services from "./components/services";
import Courses from "./components/Courses";
import Testimonial from "./components/testimonial";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ContentMobile from "./components/ContentMobile";
import ContentDesktop from "./components/ContentDesktop";
import NavbarApp from "./components/NavbarApp";

const App = () => {
  return (
    <>
      <NavbarApp />
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

const ServicesApp = () => {
  return (
    <>
      <NavbarApp />
      <Grid />
      <ResponsiveGrid mobile={<ContentMobile />} desktop={<ContentDesktop />} />
      <Footer />
    </>
  );
};

export { App, ServicesApp };
