import "./FieldError.scss";
import ErrorIcon from "../../assets/images/error.svg";

// Error message shows below each form field in the case of errors
const FieldError = ({ message = "This field is required" }) => {
  return (
    <div className="field-error">
      <img className="field-error__icon" src={ErrorIcon} alt="error icon" />
      <span className="field-error__text">{message}</span>
    </div>
  );
};

export default FieldError;
