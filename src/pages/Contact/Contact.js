import "./Contact.scss";
import { DocumentTitle } from "../../utils/utils";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactLink from "../../components/ContactLinks/ContactLink";
import connectLogo from "../../assets/images/connect.png";
const Contact = () => {
  DocumentTitle("Contact Us");
  //   user_name: "",
  //   user_email: "",
  //   message: "",
  // });
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [errors, setErrors] = useState({});
  // const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  // const form = useRef();

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });

  //   // Clear the related error when user starts typing
  //   if (name === "user_email") {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       user_email: "", // Clear the error message for email field
  //     }));
  //   }
  // };

  // const validateForm = () => {
  //   const validationErrors = {};

  //   if (!formData.user_name.trim()) {
  //     validationErrors.user_name = "Please enter your name";
  //   }

  //   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;
  //   if (!emailRegex.test(formData.user_email)) {
  //     validationErrors.user_email = "Please enter a valid email address";
  //   }

  //   if (!formData.message.trim()) {
  //     validationErrors.message = "Please enter your message";
  //   }

  //   return validationErrors;
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const validationErrors = validateForm();

  //   if (Object.keys(validationErrors).length === 0) {
  //     try {
  //       const response = await emailjs.sendForm(
  //         "service_ddftbnt",
  //         "template_nt5x99r",
  //         form.current,
  //         "7r8MHzHo8KITRpU-c"
  //       );

  //       if (response.status === 200) {
  //         setFormSubmitted(true);
  //         setSuccessMessageVisible(true);
  //         console.log("Message sent successfully!", response.text);
  //         setFormData({
  //           user_name: "",
  //           user_email: "",
  //           message: "",
  //         });
  //       } else {
  //         console.error("Email sending error:", response.text);
  //       }
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  // useEffect(() => {
  //   if (successMessageVisible) {
  //     const timer = setTimeout(() => {
  //       setSuccessMessageVisible(false);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [successMessageVisible]);

  return (
    <div className="contact">
      <h2 className="contact__title">Contact Us</h2>

      <div className="contact__body">
        <section className="contact__img-wrapper">
          <img className="contact__slogan" src={connectLogo} alt="two hand shaking " loading="lazy" />
          <ContactLink />
        </section>

        <section className="contact__content">
          <p className="contact__info">
            Whether you have questions, ideas, or want to volunteer or sponsor to support us, we’d love to hear from you
            and collaborate to shape our community together.
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
