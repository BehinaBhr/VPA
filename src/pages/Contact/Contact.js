import "./Contact.scss";
import { DocumentTitle } from "../../utils/utils";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactLink from "../../components/ContactLinks/ContactLink";
import connectLogo from "../../assets/images/connect.png";
const Contact = () => {
  DocumentTitle("Contact Us");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear the related error when user starts typing
    if (name === "user_email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: "", // Clear the error message for email field
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
          console.log("Message sent successfully!", response.text);
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
    <div className="contact">
      <div className="contact__img-wrapper">
        <section className="contact__slogan">
          <img src={connectLogo} alt="" loading="lazy" />
        </section>
        <ContactLink />
      </div>
      <div className="contact__content-wrapper">
        <section className="contact__content">
          <h2 className="contact__title">Contact Us</h2>
          <p className="contact__info">
            Whether you have questions, ideas, or want to become a volunteer, we'd love to hear from you and help shape
            our community.
          </p>
          <form className="contact__form" ref={form} onSubmit={handleSubmit}>
            <div className="contact__form-group">
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
            <div className="contact__form-group">
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
            <div className="contact__form-group">
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
              <div className="contact__form-button">
                <button type="submit">{formSubmitted ? "Send Another Message" : "Send to VPA"}</button>
              </div>
            )}
          </form>
          {successMessageVisible && (
            <div className="contact__success-message">
              <p>Thank you for your message!</p>
            </div>
          )}
        </section>
        <section className="contact__content">
          <h2 className="contact__title">Become a Member</h2>
          <p className="contact__info">
            Fill out the form below to stay updated with the latest news and events from VPA.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfB4dgCZDUdqZd_5-XCXuk1M67FskQVavFjDg9qAtocAr03UQ/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button> VPA Member Form</button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contact;
