import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import ContactLinks from "../ContactLinks/ContactLink";
import NavList from "../NavList/NavList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__body">
          <section className="footer__header">
            <div className="footer__header-logo">
              <Link to="/">
                <img className="footer__header-logo-image" src={Logo} alt="VPA Logo" />
              </Link>
            </div>
            <NavList />
          </section>

          <section className="footer__connect">
            <div className="footer__connect-join">
              <Link to="/join">
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
            href="https://behinabhr.github.io/"
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
