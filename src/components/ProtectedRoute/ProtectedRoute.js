import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/auth.js";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
