import "./Links.scss";
import { DocumentTitle } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchLinks } from "../../utils/api.js";
import Loading from "../../components/Loading /Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const Links = () => {
  DocumentTitle("Links");

  const [groupedLinks, setGroupedLinks] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const links = await fetchLinks();
        setGroupedLinks(links);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  if (hasError) return <ConnectionError error={`Unable to access links right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="links">
      <h2 className="links__title">Resource Links</h2>

      <div className="links__body">
        {groupedLinks.map((group, index) => (
          <section className="links__group" key={index}>
            <h3 className="links__group-name">{group.name}</h3>
            <div className="links__group-items">
              {group.links.map((link, i) => (
                <a key={i} href={link.href} className="links__group-item" target="_blank" rel="noopener noreferrer">
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