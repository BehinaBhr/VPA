import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  // We can actually have a list of users in the database and confirm that the current user is one of ours
  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
