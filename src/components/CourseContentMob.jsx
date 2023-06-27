import React from "react";
import "../styles/Content.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5rem",
  },
  heading: {
    margin: "15px 0",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  topHeading: {
    margin: "40px 0 0px 0",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  hr: {
    width: "100%",
    margin: "1rem 0",
    border: "none",
    borderBottom: "1px solid #333",
    fontFamily: "Poppins",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0 0 0",
  },
  list: {},
  listItem1: {
    marginLeft: "10px",
    fontFamily: "Poppins",
  },
  listItem2: {
    marginLeft: "20px",
    letterSpacing: "1px",
    fontFamily: "Poppins",
  },
  listItem3: {
    marginLeft: "-15px",
    fontFamily: "Poppins",
  },
  listItem4: {
    paddingLeft: "0",
    marginLeft: "-35px",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  subListItem: {
    marginTop: "-8px",
    fontFamily: "Jost",
    fontSize: "14px",
  },
};

const CourseContentMob = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="nail" style={styles.section}>
          <div className="heading">
            <h2 style={styles.topHeading}>Nail Course</h2>
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/nail extension.webp"
                alt=""
                style={{
                  borderRadius: "12px",
                  height: "170px",
                  marginBottom: "30px",
                }}
              />
            </div>

            <ul style={styles.list}>
              <ol style={styles.listItem1}>LEVEL 1 | LEVEL 2 | LEVEL 3</ol>
            </ul>
          </div>
        </div>
        <div className="" style={styles.section}>
          <div className="heading">
            <h2 style={styles.topHeading}>Skin Course</h2>
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/organic wax.webp"
                alt=""
                style={{
                  borderRadius: "12px",
                  height: "170px",
                  marginBottom: "30px",
                }}
              />
            </div>

            <ul style={styles.list}>
              <ol style={styles.listItem2}>BASIC | PROFESSIONAL</ol>
              <ol style={styles.listItem2}>ADVANCE | AESTHETIC</ol>
            </ul>
          </div>
        </div>
        <div className="nail" style={styles.section}>
          <div className="heading">
            <h2 style={styles.topHeading}>Makeup Course</h2>
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/treatment mask.webp"
                alt=""
                style={{
                  borderRadius: "12px",
                  height: "170px",
                  marginBottom: "30px",
                }}
              />
            </div>

            <ul style={styles.list}>
              <ol style={styles.listItem3}>BASIC | PROFESSIONAL | ADVANCE</ol>
            </ul>
          </div>
        </div>
        <div className="nail" style={styles.section}>
          <div className="heading">
            <h2 style={styles.topHeading}>Hair Course</h2>
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/hair cut.jpg"
                alt=""
                style={{
                  borderRadius: "12px",
                  height: "170px",
                  marginBottom: "30px",
                }}
              />
            </div>

            <ul style={styles.list}>
              <ol style={styles.listItem4}>HAIR CHEMICAL TREATMENT</ol>

              <ol style={styles.listItem4}>HAIR STYLING</ol>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContentMob;
