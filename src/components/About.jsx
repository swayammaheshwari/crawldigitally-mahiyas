import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <div className="row justify-content-center">
          <div id="mobile-img" className="col-md-5">
            <img
              src="/img/aboutUs.png"
              className="img-fluid rounded"
              alt="..."
              id="image"
            />
          </div>
          <div className="col-md-6">
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
              className="about-us-p"
              style={{ textAlign: "justify", fontFamily: "Poppins" }}
            >
              Mahiyaa&apos;s: The epitome of beauty services in Chhattisgarh
              since 2004. Led by owner Pinky Hedau, a seasoned expert with 20
              years of experience in the beauty industry and 6 years in nails.
              Pinky&apos;s passion for nail art has driven her to teach over
              1000+ students about nail art and share her expertise with others.
              Discover our two branches in Bilaspur City. First Mahiyaa&apos;s
              "The Beauty Salon" offers a comprehensive range of services for
              skin, hair, nails, and makeup. Second Mahiyaa&apos;s "The Nail
              Bar," indulges in the artistry of permanent nail and eyelash
              extensions. Experience beauty redefined at Mahiyaa&apos;s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
