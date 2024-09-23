import "./LoginForm.scss";
import { useState } from "react";
import FormField from "../FormField/FormField";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { login } from "../../utils/api";
import { useAuth } from "../../utils/auth.js";
import loginIcon from "../../assets/images/login.svg";

// A form used in login in admin page.
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { setAccessToken, removeAccessToken } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    let errors = {};
    if (!email) errors["email"] = ["This field is required"];
    if (!password) errors["password"] = ["This field is required"];

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const { access_token } = await login({ email, password });
        setAccessToken(access_token);
        setSubmitSuccess(true);
      } catch (error) {
        removeAccessToken();
        const backendError = error.response?.data?.message;
        setSubmitError(backendError || "Failed to log in. Please try again.");
        setSubmitSuccess(false);
      }
    }
  };

  return (
    <div className="login-form">
      <form className="login-form__body" onSubmit={onSubmit}>
        <section className="login-form__body-info">
          <FormField field_name="email" errors={errors} errorSetter={setErrors} valueSetter={setEmail} />
          <FormField field_name="password" errors={errors} errorSetter={setErrors} valueSetter={setPassowrd} />
        </section>
        <div className="login-form__button">
          <button type="submit">
            <img className="login-form__button-icon" src={loginIcon} alt="login icon" /> Login
          </button>
        </div>
      </form>
      {submitSuccess && <SuccessfulSubmitMessage message="Successfully logged in!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default LoginForm;
