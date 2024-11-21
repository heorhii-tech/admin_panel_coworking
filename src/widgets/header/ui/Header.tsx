import { useUser } from "@src/features/user/contexts/UserContext";
import { useEffect } from "react";
import UserInfo from "./UserInfo";

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="header">
      {user ? (
        <UserInfo user={user} />
      ) : (
        <button onClick={() => console.log("Redirect to login")}>Login</button>
      )}
    </div>
  );
};
