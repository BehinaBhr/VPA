import "./SuccessfulSubmitMessage.scss";

// Successful form submit message
const SuccessfulSubmitMessage = ({ message }) => {
  return (
    <div className="successfull-submit-message">
      <div className="successfull-submit-message__message">{message}</div>
    </div>
  );
};

export default SuccessfulSubmitMessage;
