import "./Logout.scss";
import { useState } from "react";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { logout } from "../../utils/api";
import { useAuth } from "../../utils/auth.js";

const Logout = () => {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { removeAccessToken } = useAuth();

  const onClick = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await logout();
      removeAccessToken();
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
