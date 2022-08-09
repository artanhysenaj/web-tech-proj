import { useState, useLayoutEffect } from "react";
import { toast } from "react-toastify";
import { localStorageHelper } from "../../helpers/helperFunctions";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { useFetch } from "../../hooks/use-fetch";
import { getUserMe } from "../../api/Authentication/Authentication";
import GeneralLoader from "../../components/UI/GeneralLoader/GeneralLoader";
const AuthContextProvider = (props) => {
  const [showGeneralLoader, setShowGeneralLoader] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const { sendRequest } = useFetch();

  useLayoutEffect(() => {
    setShowGeneralLoader(true);
    const user = localStorageHelper.get("user");
    if (user) {
      setUser(user);

      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      sendRequest(
        () => getUserMe(),
        (data) => {
          login({
            token: user.token,
            email: user.user_email ?? user.email,
            avatar_urls: data.avatar_urls,
            fullName: data.name,
            userId: data.id,
          });
          setShowGeneralLoader(false);
        }
      );
      setAuthenticated(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendRequest]);

  const login = (user) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    if (authenticated) localStorageHelper.remove("user");
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
  if (!showGeneralLoader) return <GeneralLoader />;
  return (
    <AuthContext.Provider value={{ authenticated, login, logout, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
