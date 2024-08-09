import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import ContactLinks from "../ContactLinks/ContactLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__body">
          <section className="footer__header">
            <div className="footer__header-logo">
              <Link to="/">
                <img className="footer__logo-image" src={Logo} alt="VPA Logo" loading="lazy" />
              </Link>
            </div>
            <ul className="footer__header-nav">
              <Link to="/">
                <li className="footer__header-nav-item">Home</li>
              </Link>
              <Link to="/events">
                <li className="footer__header-nav-item">Events</li>
              </Link>
              <Link to="/gallery">
                <li className="footer__header-nav-item">Gallery</li>
              </Link>
              <Link to="/links">
                <li className="footer__header-nav-item">Links</li>
              </Link>
              <Link to="/about">
                <li className="footer__header-nav-item">About</li>
              </Link>
              <Link to="/contact">
                <li className="footer__header-nav-item">Contact</li>
              </Link>
            </ul>
          </section>

          <section className="footer__connect">
            <div className="footer__connect-join">
              <Link to="/contact">
                <img
                  className="footer__connect-join-title"
                  src="https://see.fontimg.com/api/renderfont4/VGmm6/eyJyIjoiZnMiLCJoIjoxMTUsInciOjEwMDAsImZzIjoxMTUsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RG9uJ3QgTWlzcyBPdXQ/kadung-tresno.png"
                  alt="Handwriting fonts"
                  loading="lazy"
                />
              </Link>
              <p className="footer__connect-join-content">Become a Memeber for the latest news</p>
            </div>
            <ContactLinks />
          </section>
        </section>

        <section className="footer__rights">
          © VPA 2024 - All Rights Reserved
          <br />
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/behinabhr/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__rights-link"
          >
            Behina Bahramsari
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
