import { Container } from "react-bootstrap";
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
};

function Content() {
  return (
    <>
      <Container>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h6 style={{ color: "#ff8fab" }}>Nail Services</h6>
            </Accordion.Header>
            <Accordion.Body>
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
              <h4>NAIL POLISH & NAIL CARE</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Temporary Polish</li>
                <li style={styles.listItem}>Glam Brand Polish</li>
                <li style={styles.listItem}>Permanent Gel Polish</li>
                <li style={styles.listItem}>Nail Refilling</li>
                <li style={styles.listItem}>Nail Overlay with Gel Polish</li>
                <li style={styles.listItem}>Gel Extension Remover</li>
                <li style={styles.listItem}>Acrylic Extension Remover</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ color: "#ff8fab" }}>
              <h6 style={{ color: "#ff8fab" }}>Skin Services</h6>
            </Accordion.Header>
            <Accordion.Body>
              <h4>TREATMENT MASK</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Thermo Herb (wrinkles, Open Pores, Loose Skin)
                </li>
                <li style={styles.listItem}>
                  Wax Therapy (Wrinkles, Lifting. Ageing Skin, Dry skin)
                </li>
                <li style={styles.listItem}>
                  Botox Mask (Pimple, Pigmentation, Open Pores)
                </li>
                <li style={styles.listItem}>
                  Luxury Treatment (According To Skin Type)
                </li>
                <li style={styles.listItem}>
                  Light Therapy Mask (According To Skin Type)
                </li>
              </ul>
              <h4>TREATMENT FACIAL</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Cheryl's Glovite</li>
                <li style={styles.listItem}>Insta Glow</li>
                <li style={styles.listItem}>Tan Facial</li>
                <li style={styles.listItem}>Thermo - Herb Open Pores Facial</li>
                <li style={styles.listItem}>Bridal 03+ Facial</li>
                <li style={styles.listItem}>Gold Anti Aging Facial</li>
                <li style={styles.listItem}>
                  Four Layer Facial Open Pores Treatment Facial
                </li>
                <li style={styles.listItem}>Gold Bridal Facial</li>
                <li style={styles.listItem}>
                  Clari Glow (For Pimple & Oily Skin)
                </li>
                <li style={styles.listItem}>Oxy Blast (Aging, Dry Skin)</li>
                <li style={styles.listItem}>
                  Galvanic Treatment Facial (Pigmentation, Pimple, Wrinkles)
                </li>
                <li style={styles.listItem}>
                  Diamond Skin Tightening Facial (Anti Aging, Wrinkles)
                </li>
                <li style={styles.listItem}>
                  Diamond Bridal Facial (For Pimple & Oily Skin)
                </li>
                <li style={styles.listItem}>Oxy Blast (Aging, Dry Skin)</li>
              </ul>
              <h4>LUXURY FACIAL</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  24 Carat Gold Facial (Skin D-tan, Lightning, Brightening,
                  Lifting)
                </li>
                <li style={styles.listItem}>
                  Diamond Luxury Facial (Lightning, Brightening)
                </li>
                <li style={styles.listItem}>
                  Birdal 03+ Power Boost Facial (Pimple, Pigmentation, Open
                  Pores)
                </li>
                <li style={styles.listItem}>
                  Red Carpet Facial Light Therapy (According To Skin Type)
                </li>
              </ul>
              <h4>THREADING</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Threading</li>
                <li style={styles.listItem}>Forehead</li>
                <li style={styles.listItem}>Uperlips</li>
                <li style={styles.listItem}>Chin</li>
                <li style={styles.listItem}>Face Threading</li>
                <li style={styles.listItem}>Cheeks Threading</li>
              </ul>
              <h4>WAX</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Tummy & Back</li>
                <li style={styles.listItem}>Face Wax</li>
                <li style={styles.listItem}>Hand Wax</li>
                <li style={styles.listItem}>Hand & Underarms</li>
                <li style={styles.listItem}>Underarms</li>
                <li style={styles.listItem}>Half Leg</li>
                <li style={styles.listItem}>Full Leg</li>
                <li style={styles.listItem}>Full Body</li>
              </ul>
              <h4>ORGANIC WAX</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Face Wax</li>
                <li style={styles.listItem}>Hand</li>
                <li style={styles.listItem}>Hand & Underarms</li>
                <li style={styles.listItem}>Underarms</li>
                <li style={styles.listItem}>Half Leg</li>
                <li style={styles.listItem}>Full Leg</li>
                <li style={styles.listItem}>Full Body</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h6 style={{ color: "#ff8fab" }}>Hair Services</h6>
            </Accordion.Header>
            <Accordion.Body>
              <h4>HAIR COLOUR</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Global Shoulder Length</li>
                <li style={styles.listItem}>Global Middle To Longhair</li>
                <li style={styles.listItem}>Global Highlight</li>
                <li style={styles.listItem}>Highlight</li>
                <li style={styles.listItem}>High Frequency Treatment</li>
                <li style={styles.listItem}>High Frequency With Ampus</li>
                <li style={styles.listItem}>Dandruff Treatment</li>
              </ul>
              <h4>HAIR CUT</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Straight Hair Cut</li>
                <li style={styles.listItem}>U-Cut</li>
                <li style={styles.listItem}>V-Cut</li>
                <li style={styles.listItem}>Deep U-Cut</li>
                <li style={styles.listItem}>Layer Cut</li>
                <li style={styles.listItem}>Step Cut</li>
                <li style={styles.listItem}>Hair Trimming</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Content;
