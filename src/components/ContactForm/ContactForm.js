import "./ContactForm.scss";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SuccessfulSubmitMessage from "../../components/SuccessfulSubmitMessage/SuccessfulSubmitMessage";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear the related error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error message for the field
      }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Please enter your name";
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;
    if (!emailRegex.test(formData.user_email)) {
      validationErrors.user_email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Please enter your message";
    }

    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await emailjs.sendForm(
          "service_ddftbnt",
          "template_nt5x99r",
          form.current,
          "7r8MHzHo8KITRpU-c"
        );

        if (response.status === 200) {
          setFormSubmitted(true);
          setSuccessMessageVisible(true);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        } else {
          console.error("Email sending error:", response.text);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (successMessageVisible) {
      const timer = setTimeout(() => {
        setSuccessMessageVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessageVisible]);

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.user_name && <span className="error">{errors.user_name}</span>}
      </div>
      <div className="contact-form__group">
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        {errors.user_email && <span className="error">{errors.user_email}</span>}
      </div>
      <div className="contact-form__group">
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>

      {successMessageVisible ? null : (
        <div className="contact-form__button">
          <button type="submit" disabled={isSubmitting}>
            {formSubmitted ? "Send Another Message" : "Send to VPA"}
          </button>
        </div>
      )}
      {successMessageVisible && <SuccessfulSubmitMessage message="Thanks for your message!" />}
    </form>
  );
};

export default ContactForm;
