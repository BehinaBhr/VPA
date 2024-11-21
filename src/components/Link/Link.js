import "./Link.scss";
import { deleteLink } from "../../utils/api";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditAndDelete from "../EditAndDelete/EditAndDelete";

const Link = ({ id, href, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const toggleDeleteModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = async () => {
    await deleteLink(id, setHasError);
    if (!hasError) {
      setDeleteSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="link">
      <a href={href} className="link__item" target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <EditAndDelete edit_to={`/links/${id}/edit`} onDelete={toggleDeleteModal} />
      {isModalOpen && (
        <DeleteModal
          target="link"
          onDelete={handleDelete}
          onCancel={toggleDeleteModal}
          error={hasError ? "Failed to delete the link. Please try again." : ""}
          success={deleteSuccess}
        />
      )}
    </div>
  );
};
export default Link;
