import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google"
    });
    if (error) {
      console.error("Login error:", error.message);
    }
  };

  const logout = async () => {
    // Get rid of access_token in sessionStroage 
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const getUserSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if(data != null && data.session != null) sessionStorage.setItem('access_token', data.session.access_token)
      
      if (error) {
        console.error("Error fetching session:", error.message);
      } else {
        const sessionUser = data?.session?.user;
        setUser(sessionUser);
        setIsAuthenticated(!!sessionUser);
      }
    };

    getUserSession();

    // Listen for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const sessionUser = session?.user;
      setUser(sessionUser);
      setIsAuthenticated(!!sessionUser);
    });

    // Cleanup: Unsubscribe from the auth listener when component unmounts
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
