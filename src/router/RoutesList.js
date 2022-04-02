import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthStateContext } from "../context/auth";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const RoutesList = () => {
  const { data } = useContext(AuthStateContext);

  return (
    <Router>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectedRoute data={data}>
              <HomePage user={data.user} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RoutesList;
