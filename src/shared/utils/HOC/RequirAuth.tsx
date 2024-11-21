import { useUser } from "@src/features/user/contexts/UserContext";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
 interface RequireAuthProps {
   children: React.ReactNode;
 }

export function RequireAuth({ children }:RequireAuthProps) {
 const {user}=useUser();
  const location = useLocation();

  if (!user?.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}


