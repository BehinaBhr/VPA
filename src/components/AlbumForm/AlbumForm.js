import "./AlbumForm.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedSrc } from "../../utils/utils";
import BackButtonAndHeader from "../../components/BackButtonAndHeader/BackButtonAndHeader";
import CancelAndSubmit from "../../components/CancelAndSubmit/CancelAndSubmit";
import FormField from "../../components/FormField/FormField";
import FailedSubmitError from "../../components/FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../../components/SuccessfulSubmitMessage/SuccessfulSubmitMessage";

// A form used in both edit and add album
const AlbumForm = ({ header, formSubmitHandler, album = null }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [src, setSrc] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (album) {
      setName(album.name);
      setDate(album.date);
      setSrc(FormattedSrc(album.src));
    }
  }, [album]);

  const validateSrc = (src) => {
    const googleDrivePattern = /^https:\/\/drive\.google\.com\/.*\/folders\/[a-zA-Z0-9_-]+/;
    return googleDrivePattern.test(src);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    let errors = {};
    if (!name) errors["name"] = ["This field is required"];
    if (!date) errors["date"] = ["This field is required"];
    if (!src) {
      errors["src"] = ["This field is required"];
    } else if (!validateSrc(src)) {
      errors["src"] = ["Invalid Google Drive link"];
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await formSubmitHandler({ name, date, src });
        setSubmitSuccess(true);
        // Navigate to the previous page after 2 seconds
        setTimeout(() => {
          navigate("/gallery");
        }, 2000);
      } catch (error) {
        // Handle backend-specific error messages
        const backendError = error.response?.data?.message;
        setSubmitError(backendError || "Failed to submit the album. Please try again.");
        setSubmitSuccess(false);
      }
    }
  };

  // Go back to the previous page
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="album-form">
      <BackButtonAndHeader header={header} />
      <form className="album-form__body" onSubmit={onSubmit}>
        <section className="album-form__body-info">
          <FormField field_name="name" errors={errors} errorSetter={setErrors} value={name} valueSetter={setName} />
          <FormField
            field_name="date"
            errors={errors}
            errorSetter={setErrors}
            value={date}
            valueSetter={setDate}
            type="date"
          />
          <FormField field_name="src" errors={errors} errorSetter={setErrors} value={src} valueSetter={setSrc} />
        </section>
        <CancelAndSubmit onCancel={handleCancel} submitType="save" />
      </form>
      {/* Display success or error messages */}
      {submitSuccess && <SuccessfulSubmitMessage message="Album submitted successfully!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default AlbumForm;
