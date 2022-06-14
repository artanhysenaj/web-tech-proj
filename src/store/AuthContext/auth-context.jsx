import { createContext, useState } from "react";

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
    setUser(user);
    setAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <authContext.Provider value={{ authenticated, login, logout, user }}>
      {props.children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
