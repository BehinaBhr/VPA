import "./LinkGroup.scss";
import { deleteGroup, fetchGroupedLink } from "../../utils/api";
import { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditAndDelete from "../../components/EditAndDelete/EditAndDelete";
import Link from "../../components/Link/Link";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const LinkGroup = ({ id, group }) => {
  const [groupLink, setGroupLink] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const toggleDeleteModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = async () => {
    await deleteGroup(id, setHasError);
    if (!hasError) {
      setDeleteSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupLink = await fetchGroupedLink(id);
        setGroupLink(groupLink);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [id]);

  if (hasError)
    return (
      <ConnectionError error={`Unable to access group of link with ID: ${id} right now. Please try again later`} />
    );
  if (isLoading) return <Loading />;

  return (
    <div className="link-group">
      <section className="link-group__header">
        <h3 className="link-group__header-name">{group.name}</h3>
        <EditAndDelete edit_to={`/groups/${id}/edit`} onDelete={toggleDeleteModal} />
      </section>

      <section className="link-group__items">
        {groupLink.map((link) => (
          <Link key={link.id} id={link.id} href={link.href} title={link.title} />
        ))}
      </section>

      {isModalOpen && (
        <DeleteModal
          target="group"
          onDelete={handleDelete}
          onCancel={toggleDeleteModal}
          error={hasError ? "Failed to delete the group of links. Please try again." : ""}
          success={deleteSuccess}
        />
      )}
    </div>
  );
};

export default LinkGroup;
