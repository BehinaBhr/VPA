import "./Events.scss";
import { DocumentTitle } from "../../utils/utils";
import EventCard from "../../components/EventCard/EventCard.js";
import EventsElements from "./EventsElements.js";

const Events = () => {
  DocumentTitle("Events");
  return (
    <div className="events" id="events">
      <h2 className="events-title">Events</h2>
      {EventsElements.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          datetime={event.datetime}
          location={event.location}
          info={event.info}
          fee={event.fee}
        />
      ))}
    </div>
  );
};

export default Events;