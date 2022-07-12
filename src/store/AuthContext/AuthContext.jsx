import { useContext, createContext } from "react";

export const AuthContext = createContext({
  authenticated: false,
  login: () => {},
  logout: () => {},
  user: null,
});

export const useAuthContext = () => useContext(AuthContext);
