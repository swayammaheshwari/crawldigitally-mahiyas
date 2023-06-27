import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" class="about-us">
      <div class="container">
        <div class="row justify-content-center">
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
              style={{
                color: "black",
                marginBottom: "10px",
              }}
              className="h1-responsive"
            >
              ABOUT US
            </h2>
            <p
              class="about-us-p"
              style={{ textAlign: "justify", fontFamily: "Poppins" }}
            >
              Mahiyaa's: The epitome of beauty services in Chhattisgarh since
              2004. Led by owner Pinky Hedau, a seasoned expert with 20 years of
              experience in the beauty industry and 6 years in nails.Pinky's
              passion for nail art has driven her to teach over 1000+ students
              about nail art and share her expertise with others. Discover our
              two branches in Bilaspur City. First Mahiyaa's "The Beauty Salon"
              offers a comprehensive range of services for skin, hair, nails,
              and makeup. Second Mahiyaa's "The Nail Bar," indulges in the
              artistry of permanent nail and eyelash extensions. Experience
              beauty redefined at Mahiyaa's.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
