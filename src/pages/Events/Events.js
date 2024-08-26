import "./Events.scss";
import { DocumentTitle } from "../../utils/utils";
import Event from "../../components/Event/Event.js";
import { useEffect, useState } from "react";
import { fetchUpcomingEvents, fetchPastEvents } from "../../utils/api.js";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import AddButton from "../../components/AddButton/AddButton";

const Events = () => {
  DocumentTitle("Events");

  const [sortedEvents, setSortedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [view, setView] = useState("upcoming");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let events;
        if (view === "upcoming") {
          events = await fetchUpcomingEvents();
        } else {
          events = await fetchPastEvents();
        }
        setSortedEvents(events);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [view]);

  if (hasError) return <ConnectionError error={`Unable to access events right now. Please try again later`} />;
  if (isLoading) return <Loading />;
  if (sortedEvents.length === 0) return <p>No events available at the moment.</p>;

  return (
    <div className="events" id="events">
      <section className="events__header">
        <h2 className="events__header-title">Events</h2>

        <sectoin className="events__header-actions">

          <div className="events__header-segments">
            <button
              className={`events__header-segments-button ${view === "upcoming" ? "selected" : ""}`}
              onClick={() => setView("upcoming")}
            >
              <div>Upcoming</div>
            </button>
            <button
              className={`events__header-segments-button ${view === "past" ? "selected" : ""}`}
              onClick={() => setView("past")}
            >
              <div>Past</div>
            </button>
          </div>
          
          <AddButton target="Event" link_to="/events/new" />
        </sectoin>
      </section>

      {sortedEvents.map((event) => (
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
          isUpcoming={view === "upcoming"}
          register={event.register}
        />
      ))}
    </div>
  );
};

export default Events;
