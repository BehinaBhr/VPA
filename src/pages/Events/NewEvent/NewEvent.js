import { DocumentTitle } from "../../../utils/utils";
import { createEvent } from "../../../utils/api";
import EventForm from "../../../components/EventForm/EventForm";

const NewEvent = () => {
  DocumentTitle("Add New Event");

  const handleSubmit = async (eventData) => {
    await createEvent(eventData);
  };

  return <EventForm header="Add New Event" formSubmitHandler={handleSubmit} />;
};

export default NewEvent;
