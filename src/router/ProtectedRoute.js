import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ data, redirectPath = "/login", children }) => {
  return data.token ? children : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
