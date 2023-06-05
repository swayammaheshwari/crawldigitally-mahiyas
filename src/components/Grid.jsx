import React from "react";
import "../styles/Grid.css";

const Grid = () => {
  return (
    <>
      <div class="container mobile">
        <div class="row">
          <div class="col p-0 d-flex justify-content-center">
            <img
              src="/img/Rectangle 39.png"
              style={{ paddingTop: "10px" }}
              height={"570rem"}
              alt=""
            />
          </div>
          <div class="col p-0 m-0">
            <img
              src="/img/Rectangle 42.png"
              height={"285rem"}
              style={{ paddingTop: "10px" }}
              alt=""
            />
            <img
              src="/img/Rectangle 43.png"
              height={"285rem"}
              style={{ paddingTop: "10px" }}
              alt=""
            />
          </div>
          <div class="col p-0 m-0">
            <img
              src="/img/Rectangle 44.png"
              height={"570rem"}
              style={{ paddingTop: "10px", marginLeft: "-7px" }}
              alt=""
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col p-0 pl-2 ">
            <img
              src="/img/Rectangle 41.png"
              style={{ paddingTop: "10px" }}
              height={"315rem"}
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="/img/Rectangle 45.png"
              height={"315rem"}
              style={{ paddingTop: "10px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
