import "./Album.scss";
import { deleteAlbum } from "../../utils/api";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditAndDelete from "../../components/EditAndDelete/EditAndDelete";

const Album = ({ id, date, name, src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const toggleDeleteModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = async () => {
    await deleteAlbum(id, setHasError);
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
    <div className="album">
      <h3 className="album__header">
        {date} | {name}
      </h3>
      <iframe
        src={`https://drive.google.com/embeddedfolderview?id=${src}#grid`}
        className="album__frame"
        title={`Google Drive Folder - ${name}`}
        allowFullScreen
      ></iframe>

      <EditAndDelete edit_to={`/gallery/${id}/edit`} onDelete={toggleDeleteModal} />

      {isModalOpen && (
        <DeleteModal
          target="album"
          onDelete={handleDelete}
          onCancel={toggleDeleteModal}
          error={hasError ? "Failed to delete the album. Please try again." : ""}
          success={deleteSuccess}
        />
      )}
    </div>
  );
};

export default Album;
