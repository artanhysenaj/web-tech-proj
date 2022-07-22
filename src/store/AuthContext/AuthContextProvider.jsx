import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { localStorageHelper } from "../../helpers/helperFunctions";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { useFetch } from "../../hooks/use-fetch";
import { getUserMe } from "../../api/Authentication/Authentication";
const AuthContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const { sendRequest } = useFetch();
  useEffect(() => {
    if (authenticated) {
      sendRequest(
        () => getUserMe(),
        (data) =>
          login({
            token: user.token,
            avatar_urls: data.avatar_urls,
            fullName: data.name,
            userId: data.id,
          })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, sendRequest]);

  const login = (user) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
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
    setAuthenticated(false);
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
