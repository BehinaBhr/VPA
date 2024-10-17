import "./EventForm.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedImg } from "../../utils/utils";
import BackButtonAndHeader from "../BackButtonAndHeader/BackButtonAndHeader";
import CancelAndSubmit from "../CancelAndSubmit/CancelAndSubmit";
import FormField from "../FormField/FormField";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";

// A form used in both edit and add event
const EventForm = ({ header, formSubmitHandler, event = null }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [topic, setTopic] = useState("");
  const [host, setHost] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [fee, setFee] = useState(null);
  const [register, setRegister] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setTime(event.time);
      setLocation(event.location);
      setImage(FormattedImg(event.image));
      setTopic(event.topic);
      setHost(event.host);
      setAdditionalInfo(event.additional_info);
      setFee(event.fee);
      setRegister(event.register);
    }
  }, [event]);

  const validateImg = (image) => {
    const googleDriveImageUrl = /https:\/\/drive\.google\.com\/file\/d\/([^?]+)\/view/;
    return googleDriveImageUrl.test(image);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    let errors = {};
    if (!title) errors["title"] = ["This field is required"];
    if (!date) errors["date"] = ["This field is required"];
    if (!time) errors["time"] = ["This field is required"];
    if (!location) errors["location"] = ["This field is required"];
    if (!image) {
      errors["image"] = ["This field is required"];
    } else if (!validateImg(image)) {
      errors["image"] = ["Invalid Google Drive link"];
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await formSubmitHandler({
          title,
          date,
          time,
          location,
          image,
          topic,
          host,
          additional_info: additionalInfo,
          fee,
          register,
        });
        setSubmitSuccess(true);
        // Navigate to the previous page after 2 seconds
        setTimeout(() => {
          navigate("/events");
        }, 2000);
      } catch (error) {
        // Handle backend-specific error messages
        const backendError = error.response?.data?.message;
        setSubmitError(backendError || "Failed to submit the event. Please try again.");
        setSubmitSuccess(false);
      }
    }
  };

  // Go back to the previous page
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="event-form">
      <BackButtonAndHeader header={header} />
      <form className="event-form__body" onSubmit={onSubmit}>
        <section className="event-form__body-info">
          <FormField field_name="title" errors={errors} errorSetter={setErrors} value={title} valueSetter={setTitle} />
          <FormField
            field_name="date"
            errors={errors}
            errorSetter={setErrors}
            value={date}
            valueSetter={setDate}
            type="date"
          />
          <FormField field_name="time" errors={errors} errorSetter={setErrors} value={time} valueSetter={setTime} />
          <FormField
            field_name="location"
            errors={errors}
            errorSetter={setErrors}
            value={location}
            valueSetter={setLocation}
          />
          <FormField field_name="image" errors={errors} errorSetter={setErrors} value={image} valueSetter={setImage} />
        </section>

        <details>
          <summary className="event-form__body-subtitle">Optional info</summary>
          <section className="event-form__body-info">
            <FormField
              field_name="topic"
              errors={errors}
              errorSetter={setErrors}
              value={topic}
              valueSetter={setTopic}
            />
            <FormField field_name="host" errors={errors} errorSetter={setErrors} value={host} valueSetter={setHost} />
            <FormField
              field_name="additional_info"
              errors={errors}
              errorSetter={setErrors}
              value={additionalInfo}
              valueSetter={setAdditionalInfo}
            />
            <FormField field_name="fee" errors={errors} errorSetter={setErrors} value={fee} valueSetter={setFee} />
            <FormField
              field_name="register"
              errors={errors}
              errorSetter={setErrors}
              value={register}
              valueSetter={setRegister}
            />
          </section>
        </details>

        <CancelAndSubmit onCancel={handleCancel} submitType="save" />
      </form>

      {/* Display success or error messages */}
      {submitSuccess && <SuccessfulSubmitMessage message="Event submitted successfully!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default EventForm;
