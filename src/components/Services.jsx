import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <>
      <section class="card-section">
        <h1 class="text-center font-weight-bold mt-5 mb-3 jost">
          OUR POPULAR SERVICES
        </h1>
        <div class="container">
          <div class="row">
            <div class="col-md-4 mt-4 mb-4 ">
              <div class="cards" id="cards1">
                <div class="card-body">
                  <h5 class="card-title">Nail Treatment</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a href="">
                    <h6 class="heading">Read More</h6>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-4 mb-4">
              <div class="cards" id="cards2">
                <div class="card-body">
                  <h5 class="card-title color">Skin Treatment</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a href="">
                    <h6 class="heading">Read More</h6>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-4 mb-4">
              <div class="cards " id="cards3">
                <div class="card-body">
                  <h5 class="card-title color">Facial Treatment</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a href="">
                    <h6 class="heading">Read More</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
