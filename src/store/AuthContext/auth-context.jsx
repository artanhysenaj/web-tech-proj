import { useCallback } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { localStorageHelper } from "../../helpers/helperFunctions";

export const authContext = createContext({
  authenticated: false,
  login: () => {},
  logout: () => {},
  user: null,
});

const AuthContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (user) => {
    localStorageHelper.set("user", user);
    setUser(user);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorageHelper.remove("user");
    setUser(null);
    setAuthenticated(false);
    toast.success("Logged out successfully");
  };

  const loginOnReload = useCallback(() => {
    localStorageHelper.get("user") && login(localStorageHelper.get("user"));
  }, []);

  return (
    <authContext.Provider
      value={{ authenticated, login, logout, user, loginOnReload }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
