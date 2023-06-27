import React from "react";

const services = [
  {
    title: "NAIL EXTENSION",
    image: "/img/Services/nail extension.jpg",
    items: [
      "Temporary Extension",
      "Semi Permanent Gel Extension",
      "Permanent Gel Extension",
      "Poly Gel Extension",
      "Acrylic Extension",
      "Glitter Art",
    ],
  },
  {
    title: "NAIL ART",
    image: "/img/Services/nail art.jpg",
    items: [
      "Glitter, Myler Art",
      "Chrome Art",
      "Chrome, Glitter, Stone Art",
      "French Art",
      "Holographic Chrome, Glitter, Stone",
      "Glitter Art",
    ],
  },
  {
    title: "NAIL POLISH & NAIL CARE",
    image: "/img/Services/nail polish.jpg",
    items: [
      "Temporary Polish",
      "Glam Brand Polish",
      "Permanent Gel Polish",
      "Nail Refilling",
      "Nail Overlay with Gel Polish",
      "Gel Extension Remover",
      "Acrylic Extension Remover",
    ],
  },
  {
    title: "TREATMENT MASK",
    image: "/img/Services/treatment mask.webp",
    items: [
      "Thermo Herb (wrinkles, Open Pores, Loose Skin)",
      "Wax Therapy (Wrinkles, Lifting. Ageing Skin, Dry skin)",
      "Botox Mask (Pimple, Pigmentation, Open Pores)",
      "Luxury Treatment (According To Skin Type)",
      "Light Therapy Mask (According To Skin Type)",
    ],
  },
  {
    title: "TREATMENT FACIAL",
    image: "/img/Rectangle 42.png",
    items: [
      "Cheryl's Glovite",
      "Insta Glow",
      "Tan Facial",
      "Thermo - Herb Open Pores Facial",
      "Bridal 03+ Facial",
      "Gold Anti Aging Facial",
      "Four Layer Facial Open Pores Treatment Facial",
      "Gold Bridal Facial",
      "Clari Glow (For Pimple & Oily Skin)",
    ],
  },
];

const replaceBracketContent = (text) => {
  const regex = /\(([^)]+)\)/;
  const matches = regex.exec(text);
  if (matches) {
    const bracketContent = matches[1];
    const replacedText = text.replace(
      bracketContent,
      `<h6>${bracketContent}</h6>`
    );
    return replacedText;
  }
  return text;
};

const ServiceSection = ({ title, image, items }) => (
  <div className="section">
    <div className="heading">
      <h2>{title}</h2>
    </div>
    <div className="content">
      <div className="imageContainer">
        <img
          src={image}
          alt=""
          style={{ borderRadius: "12px", height: "150px" }}
        />
      </div>
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h5>{replaceBracketContent(item)}</h5>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Test = () => (
  <div className="container mt-5">
    {services.map((service, index) => (
      <ServiceSection
        key={index}
        title={service.title}
        image={service.image}
        items={service.items}
      />
    ))}
  </div>
);

export default Test;
