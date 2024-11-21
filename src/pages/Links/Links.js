import "./Links.scss";
import { DocumentTitle } from "../../utils/utils.js";
import { useEffect, useState } from "react";
import { fetchGroups } from "../../utils/api.js";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError.js";
import LinkGroup from "../../components/LinkGroup/LinkGroup.js";
import AddButton from "../../components/AddButton/AddButton.js";
import { useAuth } from "../../utils/auth.js";

const Links = () => {
  DocumentTitle("Resources");
  const { token } = useAuth();
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
  }, [token]);

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
