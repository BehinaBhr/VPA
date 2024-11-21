import { DocumentTitle } from "../../../utils/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEvent, updateEvent } from "../../../utils/api";
import EventForm  from "../../../components/EventForm/EventForm";
import Loading from "../../../components/Loading/Loading";
import ConnectionError from "../../../components/ConnectionError/ConnectionError";

const EditEvent = () => {
  DocumentTitle("Edit Event");

  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const event = await fetchEvent(eventId);
        setEvent(event);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [eventId]);

  if (hasError)
    return <ConnectionError error={`Unable to access the event with ID: ${eventId} right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (eventData) => {
    await updateEvent(eventId, eventData);
  };

  return <EventForm header="Edit Event" formSubmitHandler={handleSubmit} event={event} />;
};

export default EditEvent;
