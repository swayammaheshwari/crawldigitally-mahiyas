import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";
import { GiGraduateCap } from "react-icons/gi";

const Courses = () => {
  return (
    <>
      <section>
        <div
          className="course-div"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GiGraduateCap
            style={{
              marginTop: "50px",
              height: "100px",
              width: "100px",
              color: "rgba(206, 19, 108, 1)",
            }}
          />
        </div>
        <h2 className="text-center h1-responsive">OUR COURSES</h2>
        <div class="d-flex flex-wrap justify-content-center">
          <Card
            id="cards1"
            style={{
              border: "none",
              width: "18rem",
              height: "25rem",
              padding: "0",
              margin: "40px",
            }}
          >
            <a href="/course">
              <Card.Img
                src="/img/nail-card.png"
                style={{
                  margin: "0",
                  padding: "0px",
                  cursor: "pointer",
                  objectFit: "cover",
                  height: "110%",
                  width: "100%",
                  position: "relative",
                }}
              />
              {/* <div
                className="course-content"
                style={{ position: "absolute", top: "250px", left: "60px" }}
              >
                <img src="/img/Group 69.png" alt="" />
                <h3 style={{ fontWeight: "bold" }}>Professional</h3>
                <h6>Duration 10 Days</h6>
                <h6>READ MORE</h6>
              </div> */}
            </a>
          </Card>
          <Card
            id="cards2"
            style={{
              border: "none",

              width: "18rem",
              height: "25rem",
              padding: "0",
              margin: "40px",
            }}
          >
            <a href="/course">
              <Card.Img
                src="/img/skin-card.png"
                style={{
                  margin: "0",
                  padding: "0",
                  cursor: "pointer",
                  objectFit: "cover",
                  height: "110%",
                  position: "relative",
                }}
              />
              {/* <div
                className="course-content"
                style={{ position: "absolute", top: "250px", left: "60px" }}
              >
                <img src="/img/Group 70.png" alt="" />
                <h3 style={{ fontWeight: "bold" }}>Advance</h3>
                <h6>Duration 15 Days</h6>
                <h6>READ MORE</h6>
              </div> */}
            </a>
          </Card>
          <Card
            id="cards3"
            style={{
              border: "none",

              width: "18rem",
              height: "25rem",
              padding: "0",
              margin: "40px",
            }}
          >
            <a href="/course">
              <Card.Img
                src="/img/hair-card.png"
                style={{
                  margin: "0",
                  padding: "0",
                  cursor: "pointer",
                  objectFit: "cover",
                  height: "110%",
                  position: "relative",
                }}
              />
              {/* <div
                className="course-content"
                style={{ position: "absolute", top: "250px", left: "60px" }}
              >
                <img src="/img/Group 71.png" alt="" />
                <h3 style={{ fontWeight: "bold" }}>International</h3>
                <h6>Duration 20 Days</h6>
                <h6>READ MORE</h6>
              </div> */}
            </a>
          </Card>
          <hr
            className="hr-line"
            style={{
              opacity: 100,
              marginTop: "230px",
              height: "13px",
              backgroundColor: "#CE136C",
              border: "none",
              width: "100%",
              zIndex: -1,
              position: "absolute",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Courses;
