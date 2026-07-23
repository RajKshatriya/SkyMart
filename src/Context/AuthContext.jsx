import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    () => JSON.parse(localStorage.getItem("registeredUsers")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(
    () => JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [loggedInUser]);

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};