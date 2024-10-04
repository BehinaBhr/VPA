import "./ContactLinks.scss";
import instagramLogo from "../../assets/images/instagram.svg";
import linkedinLogo from "../../assets/images/linkedin.svg";
import telegramLogo from "../../assets/images/telegram.svg";
import facebookLogo from "../../assets/images/facebook.svg";
import emailLogo from "../../assets/images/email.svg";

function ContactLinks() {
  const contactLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/vancouverpersianarchitects",
      logo: instagramLogo,
    },
    {
      name: "Telegram",
      link: "https://github.com/BehinaBhr",
      logo: telegramLogo,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/groups/6921522/",
      logo: linkedinLogo,
    },
    {
      name: "FaceBook",
      link: "https://www.facebook.com/vancouverpersianarchitects",
      logo: facebookLogo,
    },
    {
      name: "Email",
      link: "mailto:persianinarchitecture@gmail.com",
      logo: emailLogo,
    },
  ];

  return (
    <div className="contact-links">
      {contactLinks.map((contact) => (
        <a
          key={contact.name}
          href={contact.link}
          target="_blank"
          rel="noreferrer noopener"
          className="contact-links__item"
        >
          <img src={contact.logo} alt={`${contact.name}-logo`} />
        </a>
      ))}
    </div>
  );
}
export default ContactLinks;
