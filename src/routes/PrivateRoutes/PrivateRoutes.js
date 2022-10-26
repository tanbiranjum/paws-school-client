import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthProvider from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);

  if (loading) {
    return <div>This is a spinner</div>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
