import "./Header.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";

function Header() {
  const location = useLocation();
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <section>
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo-image" src={Logo} alt="VPA Logo" loading="lazy" />
          </Link>
        </div>
        <img 
          className="header__menu-icon" 
          src={menuIcon} 
          alt="Menu" 
          onClick={toggleNav} 
          loading="lazy" 
        />
      </section>
      <nav className={`header__nav ${isNavVisible ? "visible" : ""}`}>
        <ul className="header__nav-list">
          <Link to={"/"}>
            <li className={`header__nav-item ${location.pathname === "/" ? "active" : ""}`}>About</li>
          </Link>
          <Link to={"/activity"}>
            <li className={`header__nav-item ${location.pathname === "/activity" ? "active" : ""}`}>Activity</li>
          </Link>
          <Link to={"/contribute"}>
            <li className={`header__nav-item ${location.pathname === "/contribute" ? "active" : ""}`}>Contribute</li>
          </Link>
          <Link to={"/resource"}>
            <li className={`header__nav-item ${location.pathname === "/resource" ? "active" : ""}`}>Resource</li>
          </Link>
          <Link to={"/contact"}>
            <li className={`header__nav-item ${location.pathname === "/contact" ? "active" : ""}`}>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
