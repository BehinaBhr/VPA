import "./AddButton.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth.js";

// Add a new item
function AddButton({ target, link_to }) {
  const { isAuthenticated } = useAuth();
  // If not authenticated, return null (hide the button)
  if (!isAuthenticated) return null;

  return (
    <Link to={link_to}>
      <button className="add-button">+ New {target}</button>
    </Link>
  );
}

export default AddButton;
