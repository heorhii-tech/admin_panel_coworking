import { useUser } from "@src/features/user/contexts/UserContext";
import React, { useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
}

export function RedirectIfAuthenticated({
  children,
}: RedirectIfAuthenticatedProps) {
  const { user } = useUser();
  const location = useLocation();
  if (user?.token) {
    return (
      <Navigate
        to={location.state?.from?.pathname || "/"}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
