import "./GroupForm.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButtonAndHeader from "../BackButtonAndHeader/BackButtonAndHeader";
import CancelAndSubmit from "../CancelAndSubmit/CancelAndSubmit";
import FormField from "../FormField/FormField";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { fetchGroupedLink } from "../../utils/api";
import Loading from "../Loading/Loading";
import ConnectionError from "../ConnectionError/ConnectionError";

// A form used in both edit and add group
const GroupForm = ({ header, formSubmitHandler, group = null }) => {
  const { groupId } = useParams();
  const [groupedLink, setGroupedLink] = useState([]);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (groupId) {
        try {
          const linksInGroups = await fetchGroupedLink(groupId);
          setGroupedLink(linksInGroups);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching grouped links:", error);
          setIsLoading(false);
          setHasError(true);
        }
      } else {
        setIsLoading(false); // If no groupId, immediately stop loading
      }
    };

    fetchData();
  }, [groupId]);

  useEffect(() => {
    if (group) {
      setName(group.name);
    }
  }, [group]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    let errors = {};
    if (!name) errors["name"] = ["This field is required"];

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await formSubmitHandler({ name });
        setSubmitSuccess(true);
        // Navigate to the previous page after 2 seconds
        setTimeout(() => {
          navigate("/links");
        }, 2000);
      } catch (error) {
        // Handle backend-specific error messages
        const backendError = error.response?.data?.message;
        setSubmitError(backendError || "Failed to submit the group. Please try again.");
        setSubmitSuccess(false);
      }
    }
  };

  // Go back to the previous page
  const handleCancel = () => {
    navigate("/links");
  };

  if (hasError) return <ConnectionError error={`Unable to access groups right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="group-form">
      <BackButtonAndHeader header={header} />
      <form className="group-form__body" onSubmit={onSubmit}>
        <section className="group-form__body-info">
          <FormField field_name="name" errors={errors} errorSetter={setErrors} value={name} valueSetter={setName} />
        </section>
        <CancelAndSubmit onCancel={handleCancel} submitType="save" />
      </form>
      {groupId && (
        <section className="group-form__links">
          <h3 className="group-form__links-header">Links in This Group</h3>
          {groupedLink.map((link) => (
            <a href={link.href} className="group-form__links-item" target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          ))}
        </section>
      )}
      {/* Display success or error messages */}
      {submitSuccess && <SuccessfulSubmitMessage message="Group submitted successfully!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default GroupForm;
