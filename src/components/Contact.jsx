import "../styles/Contact.css";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.namedItem("name").value;
    const email = event.currentTarget.elements.namedItem("email").value;
    const message = event.currentTarget.elements.namedItem("message").value;
    const whatsappLink = `https://wa.me/7724884259?text=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  return (
    <>
      <div id="contact">
        <div className="container" style={{ paddingTop: "0" }}>
          <section className="mb-4 pt-3">
            <center id="svg-pin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-pin-angle-fill"
                viewBox="0 0 16 16"
                color="#CE136C"
              >
                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
              </svg>
            </center>
            <h2
              style={{ marginBottom: "20px" }}
              className="h1-responsive text-center"
            >
              CONTACT US
            </h2>

            <div className="mb-4">
              <form onSubmit={handleFormSubmit}>
                <div className="md-form custom-input">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                  />
                  <label htmlFor="name" className=""></label>
                </div>

                <div className="md-form custom-input">
                  <input
                    type="text"
                    id="subject"
                    name="email"
                    className="form-control"
                    placeholder="Enter A Valid Email Address"
                  />
                  <label htmlFor="subject" className=""></label>
                </div>

                <div className="md-form custom-input">
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    placeholder="Enter Your message"
                  ></textarea>
                  <label htmlFor="message"></label>
                </div>
                <div className="text-center">
                  <button
                    id="button"
                    className="btn"
                    type="submit"
                    value="Send"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
