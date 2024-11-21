// src/components/UserInfo.tsx
import React, { useEffect } from "react";

interface User {
  email: string | null;
  displayName: string;
}

interface UserProps {
  user: User;
}

const UserInfo: React.FC<UserProps> = ({ user }) => {
  useEffect(() => {
    console.log(user.displayName);
  }, [user]);
  return (
    <div className="user-info">
      <p>Email: {user.email}</p>
      <p>Display Name: {user.displayName}</p>
    </div>
  );
};

export default UserInfo;
