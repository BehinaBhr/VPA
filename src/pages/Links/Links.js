import "./Links.scss";
import { DocumentTitle } from "../../utils/utils";
import LinksElements from "./LinksElements.js";

const Links = () => {
  DocumentTitle("Links");
  return (
    <div className="links">
      <h2 className="links__title">Resource Links</h2>
      <div className="links__body">
      {LinksElements.map((group, index) => (
        <section className="links__group" key={index}>
          <h3 className="links__group-name">{group.name}</h3>
          <div className="links__group-items">
            {group.links.map((link, i) => (
              <a key={i} href={link.href} className="links__group-item" target="_blank" rel="noopener noreferrer">
                {link.text}
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
