import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const styles = {
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
  col: {
    textAlign: "center",
    padding: "2px",
    margin: "30px auto",
  },
  image: {
    height: "30rem",
    width: "20rem",
  },
};

function CourseContent() {
  return (
    <>
      <Container>
        <center>
          <h1 style={{ marginTop: "10px", fontFamily: "-moz-initial" }}>
            OUR COURSES
          </h1>
        </center>
        <Row>
          <Col style={styles.col}>
            <img src="/img/2.png" alt="" style={styles.image} />
          </Col>
          <Col style={styles.col}>
            <img src="/img/1.png" alt="" style={styles.image} />
          </Col>
          <Col style={styles.col}>
            <img src="/img/3.png" alt="" style={styles.image} />
          </Col>
          <Col style={styles.col}>
            <img src="/img/4.jpg" alt="" style={styles.image} />
          </Col>
        </Row>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h6 style={{ color: "#ff8fab" }}>Nail Course</h6>
            </Accordion.Header>
            <Accordion.Body>
              <h4>NAIL </h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>LEVEL 1</li>
                <li style={styles.listItem}>LEVEL 2</li>
                <li style={styles.listItem}>LEVEL 3</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ color: "#ff8fab" }}>
              <h6 style={{ color: "#ff8fab" }}>Skin Course</h6>
            </Accordion.Header>
            <Accordion.Body>
              <h4>SKIN</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>BASIC</li>
                <li style={styles.listItem}>PROFESSIONAL</li>
                <li style={styles.listItem}>ADVANCE</li>
                <li style={styles.listItem}>AESTHETIC</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h6 style={{ color: "#ff8fab" }}>Makeup Course</h6>
            </Accordion.Header>
            <Accordion.Body>
              <h4>MAKEUP</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>BASIC</li>
                <li style={styles.listItem}>PROFESSIONAL</li>
                <li style={styles.listItem}>ADVANCE</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h6 style={{ color: "#ff8fab" }}>Hair Course</h6>
            </Accordion.Header>
            <Accordion.Body>
              <h4>HAIR</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>HAIR CHEMICAL TREATMENT</li>
                <li style={styles.listItem}>HAIR STYLING</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default CourseContent;
