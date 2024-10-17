import "./Contact.scss";
import { DocumentTitle } from "../../utils/utils";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactLink from "../../components/ContactLinks/ContactLink";
import ContactPic from "../../assets/images/contact.jpeg";

const Contact = () => {
  DocumentTitle("Contact Us");

  return (
    <div className="contact">
      <h2 className="contact__title">Contact Us</h2>

      <div className="contact__body">
        <section className="contact__banner">
          <img
            className="contact__banner-img"
            src={ContactPic}
            alt="laptop and pen with VPA logo symbolizing Contact Us"
          />
          <ContactLink />
        </section>

        <section className="contact__info">
          <p className="contact__info-text">
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
