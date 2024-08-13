import { Link, useLocation } from "react-router-dom";
import "./NavList.scss";

const Nav = () => {
  const location = useLocation();

  return (
    <ul className="nav-list">
      <Link to={"/"}>
        <li className={`nav-list__item ${location.pathname === "/" ? "nav-list__item--active" : ""}`}>Home</li>
      </Link>
      <Link to={"/events"}>
        <li className={`nav-list__item ${location.pathname === "/events" ? "nav-list__item--active" : ""}`}>Events</li>
      </Link>
      <Link to={"/gallery"}>
        <li className={`nav-list__item ${location.pathname === "/gallery" ? "nav-list__item--active" : ""}`}>Gallery</li>
      </Link>
      <Link to={"/join"}>
        <li className={`nav-list__item ${location.pathname === "/join" ? "nav-list__item--active" : ""}`}>Join</li>
      </Link>
      <Link to={"/links"}>
        <li className={`nav-list__item ${location.pathname === "/links" ? "nav-list__item--active" : ""}`}>Links</li>
      </Link>
      <Link to={"/about"}>
        <li className={`nav-list__item ${location.pathname === "/about" ? "nav-list__item--active" : ""}`}>About</li>
      </Link>
      <Link to={"/contact"}>
        <li className={`nav-list__item ${location.pathname === "/contact" ? "nav-list__item--active" : ""}`}>Contact</li>
      </Link>
    </ul>
  );
};

export default Nav;
