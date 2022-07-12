import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { localStorageHelper } from "../../helpers/helperFunctions";
import { AuthContext } from "./AuthContext";
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
    <AuthContext.Provider
      value={{ authenticated, login, logout, user, loginOnReload }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
