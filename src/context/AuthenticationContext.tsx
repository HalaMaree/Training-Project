/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect } from "react";
import type { User } from "./user";
import { getCurrentUser } from "../services/authenticationService";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthenticationContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      setToken(stored);
      console.log("Token found in localStorage:", stored);
      getCurrentUser(stored).then((userData) => {
        setUser(userData);
        console.log("USER DATA:", userData);
      });
    }
  }, []);

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthenticationContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
