// context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthData {
  username: string;
  role: string;
  token: string;
}

interface AuthContextType {
  user: AuthData | null;
  login: (data: AuthData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthData | null>(null);

  const login = (data: AuthData) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data)); // persist
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
