import React from "react";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const auth = useAuth();
  const access_token = localStorage.getItem("access_token");
  
  return auth.user || access_token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
