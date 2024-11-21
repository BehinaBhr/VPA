import "./FailedSubmitError.scss";

// Form failed submit error message
const FailedSubmitError = ({ error }) => {
  return (
    <div className="failed-submit-error">
      <p className="failed-submit-error__message">{error}</p>
    </div>
  );
};

export default FailedSubmitError;
