import "./Links.scss";
import { DocumentTitle } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchGroups } from "../../utils/api.js";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import LinkGroup from "../../components/LinkGroup/LinkGroup";
import AddButton from "../../components/AddButton/AddButton";

const Links = () => {
  DocumentTitle("Links");

  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groups = await fetchGroups();
        setGroups(groups);
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
      <section className="links__header">
        <h2 className="links__header-title">Resources</h2>
        <div className="links__header-actions">
          <AddButton target="Link" link_to="/links/new" />
          <AddButton target="Group" link_to="/groups/new" />
        </div>
      </section>

      {groups.map((group) => (
        <LinkGroup key={group.id} id={group.id} group={group} />
      ))}
    </div>
  );
};

export default Links;
