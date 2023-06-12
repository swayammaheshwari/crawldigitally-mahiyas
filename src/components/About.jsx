import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="" class="about-us">
      <div class="container">
        <div class="row">
          <div id="mobile-img" class="col-md-5">
            <img
              src="/img/aboutUs.png"
              class="img-fluid rounded"
              alt="..."
              id="image"
            />
          </div>
          <div class="col-md-6">
            <h2
              style={{ color: "black", fontFamily: "Jost", fontWeight: "bold" }}
            >
              ABOUT US
            </h2>
            <p>
              Meet Pinky Hedau, the founder of The Nail Bar and Mahiyas Nail
              Academy! With over a decade of experience in the nail art
              industry, Pinky's passion for nail art has driven her to teach
              over 1000+ students about nail art and share her expertise with
              others. The Nail Bar offers a range of services, from manicures
              and pedicures to gel extensions and nail art, while Mahiyas Nail
              Academy provides a comprehensive curriculum that covers all
              aspects of nail art. Whether you're looking for exceptional nail
              services or to start a career in nail art, visit The Nail Bar or
              enroll in Mahiyas Nail Academy today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
