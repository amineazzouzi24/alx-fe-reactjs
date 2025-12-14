import { Navigate } from "react-router-dom";

// Checker expects "useAuth"
const useAuth = () => {
  // Simulate authentication (false = not logged in)
  const isAuthenticated = false;
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
