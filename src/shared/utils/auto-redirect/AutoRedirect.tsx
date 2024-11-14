import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
interface AutoRedirectProps {
  to: string;
  delay: number;
}

export const AutoRedirect: React.FC<AutoRedirectProps> = ({ to, delay }) => {
  const [redirect, setRedirect] = React.useState(false);
  console.log(to);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return redirect ? <Navigate to={to} replace /> : null;
};
