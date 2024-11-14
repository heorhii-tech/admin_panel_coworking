// src/features/user/contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id?: string;
  name?: string;
  email: string | null;
  token: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}
interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser должен использоваться внутри UserProvider");
  }
  return context;
};
