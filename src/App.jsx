import React from "react";
import Carousal from "./components/Carousal";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Testimonial from "./components/Testimonial";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ContentMobile from "./components/ContentMobile";
import NavbarApp from "./components/NavbarApp";
import Content from "./components/Content";
import FloatingButton from "./components/FloatingButton";
import CourseContent from "./components/CourseContent";
import CourseContentMob from "./components/CourseContentMob";

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
      <FloatingButton />
    </>
  );
};

const ServicesApp = () => {
  return (
    <>
      <NavbarApp />
      <Grid />
      <ResponsiveGrid mobile={<ContentMobile />} desktop={<Content />} />
      <Footer />
      <FloatingButton />
    </>
  );
};

const CourseApp = () => {
  return (
    <>
      <NavbarApp />
      <ResponsiveGrid
        mobile={<CourseContentMob />}
        desktop={<CourseContent />}
      />
      <Footer />
      <FloatingButton />
    </>
  );
};

export { App, ServicesApp, CourseApp };
