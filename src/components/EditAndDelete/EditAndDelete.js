import "./EditAndDelete.scss";
import { Link } from "react-router-dom";

const EditAndDelete = ({ edit_to, onDelete }) => {
  return (
    <section className="edit-and-delete">
      <Link to={edit_to}>
        <button className="edit-and-delete__edit">Edit</button>
      </Link>

      <button className="edit-and-delete__delete" onClick={onDelete}>
        Delete
      </button>
    </section>
  );
};

export default EditAndDelete;
