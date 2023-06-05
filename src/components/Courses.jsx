import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Courses.css";
import { GiGraduateCap } from "react-icons/gi";

const Courses = () => {
  return (
    <>
      <div
        style={{
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
      <h2 className="heading">OUR COURSES</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <Card
          style={{
            width: "18rem",
            height: "25rem",
            padding: "1px",
            margin: "40px",
          }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/Rectangle 7.png"
              style={{
                cursor: "pointer",
                objectFit: "cover",
                height: "109%",
                position: "relative",
              }}
            />
            <div
              className="course-content"
              style={{ position: "absolute", top: "250px", left: "60px" }}
            >
              <img src="/img/Group 69.png" alt="" />
              <h3 style={{ fontWeight: "bold" }}>Professional</h3>
              <h6>Duration 10 Days</h6>
              <h6>READ MORE</h6>
            </div>
          </a>
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "25rem",
            padding: "1px",
            margin: "40px",
          }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/Rectangle 8.png"
              style={{
                cursor: "pointer",
                objectFit: "cover",
                height: "109%",
                position: "relative",
              }}
            />
            <div
              className="course-content"
              style={{ position: "absolute", top: "250px", left: "60px" }}
            >
              <img src="/img/Group 70.png" alt="" />
              <h3 style={{ fontWeight: "bold" }}>Professional</h3>
              <h6>Duration 15 Days</h6>
              <h6>READ MORE</h6>
            </div>
          </a>
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "25rem",
            padding: "1px",
            margin: "40px",
          }}
          className="border-danger"
        >
          <a href="https://example.com">
            <Card.Img
              src="/img/Rectangle 9.png"
              style={{
                cursor: "pointer",
                objectFit: "cover",
                height: "109%",
                position: "relative",
              }}
            />
            <div
              className="course-content"
              style={{ position: "absolute", top: "250px", left: "60px" }}
            >
              <img src="/img/Group 71.png" alt="" />
              <h3 style={{ fontWeight: "bold" }}>Professional</h3>
              <h6>Duration 20 Days</h6>
              <h6>READ MORE</h6>
            </div>
          </a>
        </Card>
      </div>
    </>
  );
};

export default Courses;
