import "./Members.scss";
import { Link } from "react-router-dom";

const members = [
  {
    title: "Engaged Members",
    content: (
      <>
        Stay actively connected with us by receiving updates on our latest activities, resources, programs, support
        groups, and events directly. Fill out the form below to{" "}
        <span className="members__item-content--bold">Stay in Touch with VPA</span>.
        <br />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfB4dgCZDUdqZd_5-XCXuk1M67FskQVavFjDg9qAtocAr03UQ/viewform"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button> Sign Up</button>
        </a>
        ,
      </>
    ),
  },
  {
    title: "Volunteer Members",
    content: (
      <>
        For those eager to contribute actively throughout the year, please send a brief explaining your interest via{" "}
        <Link to="/contact" className="members__item-content--link">
          {" "}
          our contact page
        </Link>
        . We’ll arrange an interview to discuss how we can contribute.
      </>
    ),
  },
  {
    title: "Support Members",
    content: (
      <>
        For individuals or organizations interested in sponsoring our events or providing support such as a venue,
        please reach out via{" "}
        <Link to="/contact" className="members__item-content--link">
          {" "}
          our contact page
        </Link>
        . Your financial or in-kind contributions are greatly appreciated, and we'll be in touch to discuss the details.
      </>
    ),
  },
];

const Members = () => {
  return (
    <ul className="members">
      {members.map((member, index) => (
        <li key={index} className="members__item">
          <h3 className="members__item-title">{member.title}</h3>
          <p className="members__item-content">{member.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Members;
