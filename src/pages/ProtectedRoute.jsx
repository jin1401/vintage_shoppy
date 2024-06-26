import React from "react";
import { useAuthContext } from "../components/context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requiredAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
