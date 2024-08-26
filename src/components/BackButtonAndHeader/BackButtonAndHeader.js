import "./BackButtonAndHeader.scss";
import arrowBack from "../../assets/images/arrow-back.svg";
import { NavLink, useNavigate } from "react-router-dom";

const BackButtonAndHeader = ({ header, back_to }) => {
  const navigate = useNavigate();
  return (
    <section className="back-button-and-header">
      <NavLink to={back_to} onClick={!back_to ? () => navigate(-1) : () => {}} >
        <img className="back-button-and-header__icon" src={arrowBack} alt="arrow-back" />
      </NavLink>
      <div className="back-button-and-header__title">{header}</div>
    </section>
  );
};

export default BackButtonAndHeader;
