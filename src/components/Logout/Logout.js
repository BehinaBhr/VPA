import "./Logout.scss";
import { useState } from "react";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { logout } from "../../utils/api";

const Logout = ({ setToken }) => {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onClick = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await logout();
      setToken(null);
      sessionStorage.removeItem("access_token");
      setSubmitSuccess(true);
    } catch (error) {
      const backendError = error.response?.data?.message;
      setSubmitError(backendError || "Failed to log out. Please try again.");
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="logout">
      <form className="logout__body" onSubmit={onClick}>
        <button>Log Out</button>
      </form>

      {submitSuccess && <SuccessfulSubmitMessage message="Successfully logged out!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default Logout;
