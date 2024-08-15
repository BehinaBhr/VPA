import "./Links.scss";
import { DocumentTitle } from "../../utils/utils";
import LinksElements from "./LinksElements.js";

// To group the links by `group_name`
const groupLinksByGroupName = (links) => {
  const groupedLinks = {};

  links.forEach(link => {
    const { group_name } = link;
     // Create a new group if it doesn't exist
    if (!groupedLinks[group_name]) {
      groupedLinks[group_name] = [];
    }
    // Add the link to the corresponding group
    groupedLinks[group_name].push(link);
  });

  return groupedLinks;
};



const Links = () => {
  DocumentTitle("Links");

  // Group links by their group_name 
  const groupedLinks = groupLinksByGroupName(LinksElements);

  return (
    <div className="links">
      <h2 className="links__title">Resource Links</h2>
      <div className="links__body">
        {Object.keys(groupedLinks).map((groupName, index) => (
          <section className="links__group" key={index}>
            <h3 className="links__group-name">{groupName}</h3>
            <div className="links__group-items">
              {groupedLinks[groupName].map((link, i) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="links__group-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Links;

