import "./EventCard.scss";
import { useState } from "react";
import datetimeIcon from "../../assets/images/datetime.svg";
import locationIcon from "../../assets/images/location.svg";

const EventCard = ({ id, image, title, datetime, location, info, register, fee }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={`event-card ${expanded ? "event-card--expanded" : ""}`}>
      <img className="event-card__poster" src={image} alt="event postrer" loading="lazy" />
      <section className="event-card__content">
        <h3 className="event-card__title">{title}</h3>
        <div className="event-card__info-wrapper">
        <div className="event-card__subsection">
          <img className="event-card__subsection-icon" src={datetimeIcon} alt="datetime icon" loading="lazy" />
          <h4 className="event-card__subsection-info">{datetime}</h4>
        </div>
        <div className="event-card__subsection">
          <img className="event-card__subsection-icon" src={locationIcon} alt="location icon" loading="lazy" />
          <h4 className="event-card__subsection-info">{location}</h4>
        </div>
        </div>
        <button className="event-card__see-more" onClick={toggleExpand}>
          {expanded ? "See Less" : "See More"}
        </button>
      </section>

      {expanded && (
        <section className="event-card__content">
          <ul className="event-card__description">
            {info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="event-card__detail-wrapper">
          <h4 className="event-card__fee">Fee: {fee}</h4>
          <a href={register} className="event-card__register" target="_blank" rel="noopener noreferrer">
            Register
          </a>
          </div>
          
        </section>
      )}

    </div>
  );
};

export default EventCard;
