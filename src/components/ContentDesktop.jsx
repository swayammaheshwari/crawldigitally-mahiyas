import React from "react";
// import "../styles/Content.css";

const styles = {
  // container: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   marginTop: "5rem",
  // },
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

const ContentDesktop = () => {
  return (
    <>
      <div className="container mt-5">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <div class="d-flex">
              <div class="p-2">
                <h2
                  class="accordion-header"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  id="flush-headingOne"
                >
                  NAIL SERVICES
                </h2>
              </div>

              <div class="ml-auto p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{ height: "10px" }}
                ></button>
              </div>
            </div>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
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
                  <li style={styles.listItem}>
                    Holographic Chrome, Glitter, Stone
                  </li>
                  <li style={styles.listItem}>Glitter Art</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="d-flex">
              <div class="p-2">
                <h2
                  class="accordion-header"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  id="flush-headingTwo"
                >
                  SKIN SERVICES
                </h2>
              </div>

              <div class="ml-auto p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{ height: "10px" }}
                ></button>
              </div>
            </div>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="d-flex">
              <div class="p-2">
                <h2
                  class="accordion-header"
                  id="flush-headingThree"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  HAIR SERVICES
                </h2>
              </div>

              <div class="ml-auto p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{ height: "10px" }}
                ></button>
              </div>
            </div>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDesktop;
