import "./Events.scss";
import { DocumentTitle } from "../../utils/utils.js";
import Event from "../../components/Event/Event.js";
import { useEffect, useState } from "react";
import { fetchEvents, fetchUpcomingEvents, fetchPastEvents } from "../../utils/api.js";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError.js";
import AddButton from "../../components/AddButton/AddButton.js";

const Events = () => {
  DocumentTitle("Events");

  // By keeping allEvents and events separate, we can avoid redundant API requests when switching between views.
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [view, setView] = useState(() => sessionStorage.getItem("eventView") || "all");

  // Save the selected view to sessionStorage to persist the user's choice within the current session, allowing the view to be maintained across page refreshes.
  // The view will reset to "all" when a new session starts, ensuring a fresh state for new sessions.
  useEffect(() => {
    sessionStorage.setItem("eventView", view);
  }, [view]);

  // Fetch events based on the selected view
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        let fetchedEvents = [];
        if (view === "all") {
          fetchedEvents = await fetchEvents();
        } else if (view === "upcoming") {
          fetchedEvents = await fetchUpcomingEvents();
        } else if (view === "past") {
          fetchedEvents = await fetchPastEvents();
        }

        setEvents(fetchedEvents);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [view]);

  // Reset the view in sessionStorage when the component unmounts to ensure that the user's view state is cleared when they navigate to another page.
  // also supports scenarios where users may open different views in different tabs, as the view is specific to the current tab.
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("eventView");
    };
  }, []);

  if (hasError) {
    return <ConnectionError error={`Unable to access ${view} events right now. Please try again later`} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="events" id="events">
      <section className="events__header">
        <h2 className="events__header-title">Events</h2>
        <AddButton target="Event" link_to="/events/new" />
      </section>

      <section className="events__tabs">
        <button className={`events__tabs-button ${view === "all" ? "selected" : ""}`} onClick={() => setView("all")}>
          <div>All</div>
        </button>
        <button
          className={`events__tabs-button ${view === "upcoming" ? "selected" : ""}`}
          onClick={() => setView("upcoming")}
        >
          <div>Upcoming</div>
        </button>
        <button className={`events__tabs-button ${view === "past" ? "selected" : ""}`} onClick={() => setView("past")}>
          <div>Past</div>
        </button>
      </section>

      {events.length === 0 ? (
        <p className="events__message">No {view} events available at the moment.</p>
      ) : (
        events.map((event) => (
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
        ))
      )}
    </div>
  );
};

export default Events;
