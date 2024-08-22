import "./LinkGroup.scss";
import EditAndDelete from "../../components/EditAndDelete/EditAndDelete";

const LinkGroup = ({ group, index }) => {
  return (
    <div className="links__group" key={index}>
      <h3 className="links__group-name">{group.name}</h3>
      <div className="links__group-items">
        {group.links.map((link, i) => (
          <a key={i} href={link.href} className="links__group-item" target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        ))}
      </div>
      <div className="links__group-actions">
        <EditAndDelete edit_to="/Link" onClick="/links/new"/>
      </div>
    </div>
  );
};

export default LinkGroup;
