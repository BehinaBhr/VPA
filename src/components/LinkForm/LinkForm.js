import "./LinkForm.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButtonAndHeader from "../BackButtonAndHeader/BackButtonAndHeader";
import CancelAndSubmit from "../CancelAndSubmit/CancelAndSubmit";
import FormField from "../FormField/FormField";
import FormSelect from "../FormSelect/FormSelect";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { fetchGroups } from "../../utils/api";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

// A form used in both edit and add link
const LinkForm = ({ header, formSubmitHandler, link = null }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [href, setHref] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groups = await fetchGroups();
        setGroups(groups);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (link) {
      setHref(link.href);
      setTitle(link.title);
      setSelectedGroupId(link.group_id);
    }
  }, [link]);

  const validateHref = (href) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(href);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    let errors = {};
    if (!selectedGroupId) errors["group_id"] = ["Please select a group"];
    if (!title) errors["title"] = ["This field is required"];
    if (!href) {
      errors["href"] = ["This field is required"];
    } else if (!validateHref(href)) {
      errors["href"] = ["Invalid Url"];
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await formSubmitHandler({ href, title, group_id: selectedGroupId });
        setSubmitSuccess(true);
        // Navigate to the previous page after 2 seconds
        setTimeout(() => {
          navigate("/links");
        }, 2000);
      } catch (error) {
        // Handle backend-specific error messages
        const backendError = error.response?.data?.message;
        setSubmitError(backendError || "Failed to submit the link. Please try again.");
        setSubmitSuccess(false);
      }
    }
  };

  // Go back to the previous page
  const handleCancel = () => {
    navigate(-1);
  };

  if (hasError) return <ConnectionError error={`Unable to access groups right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="link-form">
      <BackButtonAndHeader header={header} />
      <form className="link-form__body" onSubmit={onSubmit}>
        <section className="link-form__body-info">
          <FormField field_name="href" errors={errors} errorSetter={setErrors} value={href} valueSetter={setHref} />
          <FormField field_name="title" errors={errors} errorSetter={setErrors} value={title} valueSetter={setTitle} />
          {groups && (
            <FormSelect
              field_name="group_id"
              label="group"
              errors={errors}
              errorSetter={setErrors}
              options={groups.map((group) => ({ value: group.id, text: group.name }))}
              value={selectedGroupId}
              valueSetter={setSelectedGroupId}
            />
          )}
        </section>
        <CancelAndSubmit onCancel={handleCancel} submitType="save" />
      </form>
      {/* Display success or error messages */}
      {submitSuccess && <SuccessfulSubmitMessage message="Link submitted successfully!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default LinkForm;
