import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const AuthTokenProvider = ({ children }) => {


  const [token, setToken] = useState(localStorage.getItem("Token"));

  const setLocalStoragetoToken = (serverTokens) => {
    localStorage.setItem("Token", serverTokens);
  };

  const LogoutUser = () => {
    setToken(null);
    return localStorage.removeItem("Token");
  }

  return (
    <authContext.Provider value={{ setLocalStoragetoToken, LogoutUser}}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthTokenProvider = () => {
  const authContextValue = useContext(authContext);
  if (!authContextValue) {
    throw new Error("useAuth is not provided in index.js");
  }
  return authContextValue;
};
