import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "access_token") setToken(event.newValue);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const setAccessToken = (token) => {
    localStorage.setItem("access_token", token);
    setToken(token);
  };

  const removeAccessToken = () => {
    localStorage.removeItem("access_token");
    setToken(null);
  };

  return <AuthContext.Provider value={{ token, setAccessToken, removeAccessToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
