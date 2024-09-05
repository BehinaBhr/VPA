import "./EditAndDelete.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";

const EditAndDelete = ({ edit_to, onDelete }) => {
  return (
    <section className="edit-and-delete">
      <Link to={edit_to}>
        <button className="edit-and-delete__edit">
          <img className="edit-and-delete__edit-icon" src={editIcon} alt="Edit" />
          <span className="edit-and-delete__edit-text">Edit</span>
        </button>
      </Link>

      <button className="edit-and-delete__delete" onClick={onDelete}>
        <img className="edit-and-delete__delete-icon" src={deleteIcon} alt="Delete" />
        <span className="edit-and-delete__delete-text">Delete</span>
      </button>
    </section>
  );
};

export default EditAndDelete;
