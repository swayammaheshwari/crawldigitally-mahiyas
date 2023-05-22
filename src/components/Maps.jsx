import React from "react";

function Maps() {
  return (
    <div className="container">
      <h2 className="text-center mb-5">Reach Us At</h2>
      <div className="row px-3">
        <div className="col-md-6 ">
          <div className="card">
            <div className="card-body p-0">
              <iframe
                title="example-map-1"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.574174414328!2d-96.7977337!3d32.7801013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80c8c117c0f9f3d1!2sExample+Location+1!5e0!3m2!1sen!2sus!4v1551833526892"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
            <div
              id="div-map"
              className="card-footer p-0 bg-secondary text-white"
            >
              <h5 className="mb-0 px-2">Shop 1</h5>
              <p className="mb-0 px-2">123 Example Street</p>
              <p className="mb-0 px-2">New York, NY 12345</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body p-0">
              <iframe
                title="example-map-2"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.574174414328!2d-96.7977337!3d32.7801013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80c8c117c0f9f3d1!2sExample+Location+2!5e0!3m2!1sen!2sus!4v1551833526892"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
            <div
              id="div-map"
              className="card-footer p-0 bg-secondary text-white"
            >
              <h5 className="mb-0 px-2">Shop 2</h5>
              <p className="mb-0 px-2">456 Example Street</p>
              <p className="mb-0 px-2">New York, NY 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
