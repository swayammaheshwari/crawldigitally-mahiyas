import React, { useEffect, useState } from "react";

const DeviceWidthDisplay = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h3>Device Width: {width}px</h3>
    </div>
  );
};

export default DeviceWidthDisplay;
