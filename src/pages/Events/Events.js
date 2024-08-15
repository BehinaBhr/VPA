import "./Events.scss";
import { DocumentTitle } from "../../utils/utils";
import Event from "../../components/Event/Event.js";
import EventsElements from "./EventsElements.js";

const Events = () => {
  DocumentTitle("Events");

  return (
    <div className="events" id="events">
      <h2 className="events-title">Events</h2>
      {EventsElements.map((event) => (
        <Event
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          time={event.time}
          location={event.location}
          host={event.host}
          topic={event.topic}
          additional_info={event.additional_info}
          fee={event.fee}
        />
      ))}
    </div>
  );
};

export default Events;
