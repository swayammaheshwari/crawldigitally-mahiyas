import React from "react";
import "../styles/Content.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5rem",
  },
  section: {
    width: "30%",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  hr: {
    width: "50%",
    margin: "1rem 0",
    border: "none",
    borderBottom: "1px solid #333",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
};

const Content = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="nail" style={styles.section}>
          <div className="heading">
            <h2 style={styles.heading}>NAIL SERVICES</h2>
            <hr style={styles.hr} />
          </div>
          <h4>NAIL EXTENSION</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Temporary Extension</li>
            <li style={styles.listItem}>Semi Permanent Gel Extension</li>
            <li style={styles.listItem}>Permanent Gel Extension</li>
            <li style={styles.listItem}>Poly Gel Extension</li>
            <li style={styles.listItem}>Acrylic Extension</li>
            <li style={styles.listItem}>Glitter Art</li>
          </ul>
          <h4>NAIL ART</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Glitter, Myler Art</li>
            <li style={styles.listItem}>Chrome Art</li>
            <li style={styles.listItem}>Chrome, Glitter, Stone Art</li>
            <li style={styles.listItem}>French Art</li>
            <li style={styles.listItem}>Holographic Chrome, Glitter, Stone</li>
            <li style={styles.listItem}>Glitter Art</li>
          </ul>
        </div>
        <div className="skin" style={styles.section}>
          <div className="heading">
            <h2 style={styles.heading}>SKIN</h2>
            <hr style={styles.hr} />
          </div>
          <h4>NAIL EXTENSION</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Temporary Extension</li>
            <li style={styles.listItem}>Semi Permanent Gel Extension</li>
            <li style={styles.listItem}>Permanent Gel Extension</li>
            <li style={styles.listItem}>Poly Gel Extension</li>
            <li style={styles.listItem}>Acrylic Extension</li>
            <li style={styles.listItem}>Glitter Art</li>
          </ul>
          <h4>NAIL ART</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Glitter, Myler Art</li>
            <li style={styles.listItem}>Chrome Art</li>
            <li style={styles.listItem}>Chrome, Glitter, Stone Art</li>
            <li style={styles.listItem}>French Art</li>
            <li style={styles.listItem}>Holographic Chrome, Glitter, Stone</li>
            <li style={styles.listItem}>Glitter Art</li>
          </ul>
        </div>
        <div className="hair" style={styles.section}>
          <div className="heading">
            <h2 style={styles.heading}>HAIR</h2>
            <hr style={styles.hr} />
          </div>
          <h4>NAIL EXTENTION</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Temporary Extension</li>
            <li style={styles.listItem}>Semi Permanent Gel Extension</li>
            <li style={styles.listItem}>Permanent Gel Extension</li>
            <li style={styles.listItem}>Poly Gel Extension</li>
            <li style={styles.listItem}>Acrylic Extension</li>
            <li style={styles.listItem}>Glitter Art</li>
          </ul>
          <h4>NAIL ART</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Glitter, Myler Art</li>
            <li style={styles.listItem}>Chrome Art</li>
            <li style={styles.listItem}>Chrome, Glitter, Stone Art</li>
            <li style={styles.listItem}>French Art</li>
            <li style={styles.listItem}>Holographic Chrome, Glitter, Stone</li>
            <li style={styles.listItem}>Glitter Art</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Content;
