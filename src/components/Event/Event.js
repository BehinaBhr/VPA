import "./Event.scss";
import { useState } from "react";
import datetimeIcon from "../../assets/images/datetime.svg";
import locationIcon from "../../assets/images/location.svg";
import hostIcon from "../../assets/images/host.svg";
import topicIcon from "../../assets/images/topic.svg";
import infoIcon from "../../assets/images/info.svg";
import feeIcon from "../../assets/images/fee.svg";

const Event = ({ id, image, title, date, time, location, topic, host, additional_info, register, fee }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={`event ${expanded ? "event--expanded" : ""}`}>
      <div className="event__poster">
        {/* <img src={image} alt="event poster" loading="lazy" /> */}
        <img src={`https://drive.google.com/thumbnail?id=${image}&sz=w1000`} alt={`event${id} poster`} loading="lazy"/>
      </div>
      <div className="event__body">
        <h3 className="event__title">{title}</h3>
        <div className="event__section">
          <div className="event__info">
            <img className="event__info-icon" src={datetimeIcon} alt="datetime icon" loading="lazy" />
            <h4 className="event__info-title">When:</h4>
            <p className="event__info-text">
              {date} - {time}
            </p>
          </div>
        </div>

        {expanded && (
          <div className="event__section">
            <div className="event__info">
              <img className="event__info-icon" src={locationIcon} alt="location icon" loading="lazy" />
              <h4 className="event__info-title">Where:</h4>
              <p className="event__info-text">{location}</p>
            </div>

            {topic && (
              <div className="event__info">
                 <img className="event__info-icon" src={topicIcon} alt="topic icon" loading="lazy" />
                <h4 className="event__info-title">Topic:</h4>
                <p className="event__info-text">{topic}</p>
              </div>
            )}

            {host && (
              <div className="event__info">
                 <img className="event__info-icon" src={hostIcon} alt="host icon" loading="lazy" />
                <h4 className="event__info-title">Host:</h4>
                <p className="event__info-text">{host}</p>
              </div>
            )}

            {additional_info && (
              <div className="event__info">
                <img className="event__info-icon" src={infoIcon} alt="info icon" loading="lazy" />
                <h4 className="event__info-title">Info:</h4>
                <p className="event__info-text">{additional_info}</p>
              </div>
            )}

            {fee && (
              <div className="event__info">
                 <img className="event__info-icon" src={feeIcon} alt="fee icon" loading="lazy" />
                <h4 className="event__info-title">Fee:</h4>
                <p className="event__info-text">{fee}</p>
              </div>
            )}

            <a href={register} className="event__register" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        )}
        <button className="event__see-more" onClick={toggleExpand}>
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Event;
