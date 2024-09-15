import "./LoginForm.scss";
import { useState } from "react";
import FormField from "../FormField/FormField";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { login } from "../../utils/api";

// A form used in both edit and add group
const LoginForm = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
        console.log(access_token);
        setToken(access_token);
        sessionStorage.setItem("access_token", access_token);
        setSubmitSuccess(true);
      } catch (error) {
        setToken(null);
        sessionStorage.removeItem("access_token");
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
        <button className="login-form__save" type="submit">
          Log In
        </button>
      </form>
      {submitSuccess && <SuccessfulSubmitMessage message="Successfully logged in!" />}
      {submitError && <FailedSubmitError error={submitError} />}
    </div>
  );
};

export default LoginForm;
