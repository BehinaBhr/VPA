import "./Activity.scss";
import { Link } from "react-router-dom";

const Activity = ({ id, image, title, link_to }) => {
  return (
    <Link to={link_to}>
      <div className="activity">
        <h3 className="activity__title">{title}</h3>
        <div className="activity__banner">
          <img src={image} alt={`activity${id} banner`} loading="lazy" />
        </div>
      </div>
    </Link>
  );
};

export default Activity;
