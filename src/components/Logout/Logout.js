import "./Logout.scss";
import { useState } from "react";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError.js";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage.js";
import { logout } from "../../utils/api.js";
import { useAuth } from "../../utils/auth.js";
import logoutIcon from "../../assets/images/logout.svg";

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
      <form onSubmit={onClick}>
        <div className="logout__button">
          <button type="submit">
            <img className="logout__button-icon" src={logoutIcon} alt="logout icon" /> Logout
          </button>
        </div>
      </form>

      {submitSuccess && <SuccessfulSubmitMessage message="Successfully logged out!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default Logout;
