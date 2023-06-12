import React from "react";
import "../styles/Content.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5rem",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  hr: {
    width: "100%",
    margin: "1rem 0",
    border: "none",
    borderBottom: "1px solid #333",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
};

const ContentMobile = () => {
  return (
    <>
      {/* <center> */}
      <div className="container mt-5">
        <div className="nail" style={styles.section}>
          <div className="heading">
            <h2 style={styles.heading}>NAIL SERVICES</h2>
            <hr style={styles.hr} />
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
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
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
          </div>
        </div>
        <div className="skin" style={styles.section}>
          <div className="heading">
            <h2 style={styles.heading}>SKIN</h2>
            <hr style={styles.hr} />
          </div>

          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
                Birdal 03+ Power Boost Facial (Pimple, Pigmentation, Open Pores)
              </li>
              <li style={styles.listItem}>
                Red Carpet Facial Light Therapy (According To Skin Type)
              </li>
            </ul>
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
            <h4>THREADING</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>Threading</li>
              <li style={styles.listItem}>Forehead</li>
              <li style={styles.listItem}>Uperlips</li>
              <li style={styles.listItem}>Chin</li>
              <li style={styles.listItem}>Face Threading</li>
              <li style={styles.listItem}>Cheeks Threading</li>
            </ul>
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
          </div>
        </div>
        <div className="hair" style={styles.section}>
          <div className="heading">
            <h2 style={styles.heading}>HAIR</h2>
            <hr style={styles.hr} />
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>

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
            <div style={styles.imageContainer}>
              <img
                src="/img/Rectangle 42.png"
                alt=""
                style={{ borderRadius: "12px", height: "200px" }}
              />
            </div>
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
          </div>
        </div>
      </div>
      {/* </center> */}
    </>
  );
};

export default ContentMobile;
