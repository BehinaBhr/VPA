import "./Members.scss";
import MembersElements from "./MembersElements.js";


const Members = () => {
  return (
    <ul className="members">
      {MembersElements.map((member, index) => (
        <li key={index} className="members__item">
          <h3 className="members__item-title">{member.title}</h3>
          <p className="members__item-content">{member.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Members;
