import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/mahiyaasthenailbar/"
            role="button"
          >
            <FaFacebookF />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/mahiyaas_the_nail_bar_/"
            role="button"
          >
            <FaInstagram />
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#25d366" }}
            href="https://api.whatsapp.com/send/?phone=%2B918319276771"
            role="button"
          >
            <FaWhatsapp />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3 bg-dark"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:<span> </span>
        <a className="text-white" href="#">
          Mahiyaas
        </a>
      </div>
    </footer>
  );
};

export default Footer;
