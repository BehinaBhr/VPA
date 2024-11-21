import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";
import NavList from "../NavList/NavList";

function Header() {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <section>
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo-image" src={Logo} alt="VPA logo" />
          </Link>
        </div>
        <img className="header__menu-icon" src={menuIcon} alt="menu icon" onClick={toggleNav} />
      </section>
      <nav className={`header__nav ${isNavVisible ? "visible" : ""}`}>
        <NavList />
      </nav>
    </header>
  );
}

export default Header;
