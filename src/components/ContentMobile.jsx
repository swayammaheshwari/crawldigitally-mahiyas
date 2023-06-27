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
    margin: "20px 0",
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
  listItem: {
    marginLeft: "30px",
    fontFamily: "Poppins",
  },
  subListItem: {
    marginTop: "-8px",
    fontFamily: "Jost",
    fontSize: "14px",
  },
};

const ContentMobile = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="nail" style={styles.section}>
          <div className="heading">
            <h2 style={styles.topHeading}>NAIL SERVICES</h2>
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/nail extension.webp"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>NAIL EXTENSION</h4>
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
                src="/img/Services/nail art.webp"
                alt=""
                style={{
                  borderRadius: "22px",
                  height: "170px",
                }}
              />
            </div>
            <h4 style={styles.heading}>NAIL ART</h4>
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
                src="/img/Services/nail polish.jpg"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>NAIL POLISH & NAIL CARE</h4>
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
            <hr style={styles.hr} />
            <h2 style={styles.topHeading}>SKIN</h2>
          </div>

          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/treatment mask.webp"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>TREATMENT MASK</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <h6>Thermo Herb</h6>
                <h6 style={styles.subListItem}>
                  (wrinkles, Open Pores, Loose Skin)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Wax Therapy</h6>
                <h6 style={styles.subListItem}>
                  (Wrinkles, Lifting. Ageing Skin, Dry skin)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Botox Mask</h6>
                <h6 style={styles.subListItem}>
                  (Pimple, Pigmentation, Open Pores)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Luxury Treatment</h6>
                <h6 style={styles.subListItem}>(According To Skin Type)</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Light Therapy Mask</h6>
                <h6 style={styles.subListItem}>(According To Skin Type)</h6>
              </li>
            </ul>

            <div style={styles.imageContainer}>
              <img
                src="/img/Services/treatment facial.webp"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>TREATMENT FACIAL</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <h6>Cheryl's Glovite</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Insta Glow</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Tan Facial</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Thermo - Herb Open Pores Facial</h6>
                <h6 style={styles.subListItem}>
                  (wrinkles, Open Pores, Loose Skin)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Bridal 03+ Facial</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Gold Anti Aging Facial</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Four Layer Facial Open Pores Treatment Facial</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Gold Bridal Facial</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Clari Glow</h6>
                <h6 style={styles.subListItem}>(For Pimple & Oily Skin)</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Oxy Blast</h6>
                <h6 style={styles.subListItem}>(Aging, Dry Skin)</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Galvanic Treatment Facial</h6>
                <h6 style={styles.subListItem}>
                  (Pigmentation, Pimple, Wrinkles)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Diamond Skin Tightening Facial</h6>
                <h6 style={styles.subListItem}>(Anti Aging, Wrinkles)</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Diamond Bridal Facial</h6>
                <h6 style={styles.subListItem}>(For Pimple & Oily Skin)</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Oxy Blast</h6>
                <h6 style={styles.subListItem}>(Aging, Dry Skin)</h6>
              </li>
            </ul>

            <div style={styles.imageContainer}>
              <img
                src="/img/Services/luxury facial.jpg"
                alt=""
                style={{ borderRadius: "12px", height: "160px" }}
              />
            </div>
            <h4 style={styles.heading}>LUXURY FACIAL</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <h6>24 Carat Gold Facial</h6>
                <h6 style={styles.subListItem}>
                  (Skin D-tan, Lightning, Brightening, Lifting)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Diamond Luxury Facial</h6>
                <h6 style={styles.subListItem}>(Lightning, Brightening)</h6>
              </li>
              <li style={styles.listItem}>
                <h6>Birdal 03+ Power Boost Facial</h6>
                <h6 style={styles.subListItem}>
                  (Pimple, Pigmentation, Open Pores)
                </h6>
              </li>
              <li style={styles.listItem}>
                <h6>Red Carpet Facial Light Therapy</h6>
                <h6 style={styles.subListItem}>(According To Skin Type)</h6>
              </li>
            </ul>

            <div style={styles.imageContainer}>
              <img
                src="/img/Services/threading.jpg"
                alt=""
                style={{ borderRadius: "12px", height: "167px" }}
              />
            </div>
            <h4 style={styles.heading}>THREADING</h4>
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
                src="/img/Services/wax.webp"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>WAX</h4>
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
                src="/img/Services/organic wax.webp"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>ORGANIC WAX</h4>
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
            <hr style={styles.hr} />
            <h2 style={styles.topHeading}>HAIR</h2>
          </div>
          <div className="content">
            <div style={styles.imageContainer}>
              <img
                src="/img/Services/hair color.jpg"
                alt=""
                style={{ borderRadius: "12px", height: "140px" }}
              />
            </div>

            <h4 style={styles.heading}>HAIR COLOUR</h4>
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
                src="/img/Services/hair cut.jpg"
                alt=""
                style={{ borderRadius: "12px", height: "170px" }}
              />
            </div>
            <h4 style={styles.heading}>HAIR CUT</h4>
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
    </>
  );
};

export default ContentMobile;
