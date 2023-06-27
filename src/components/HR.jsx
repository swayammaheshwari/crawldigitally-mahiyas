import React from "react";

const HR = ({ top, bottom }) => {
  return (
    <hr
      className="hr-mobile"
      style={{
        opacity: 100,
        height: "240px",
        backgroundColor: "rgba(255, 194, 209, 1)",
        border: "none",
        width: "100%",
        textAlign: "left",
        marginLeft: 0,
        zIndex: -1,
        position: "absolute",
        top: top,
        bottom: bottom,
      }}
    />
  );
};

export default HR;
