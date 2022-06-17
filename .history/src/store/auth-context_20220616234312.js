import React, { useState } from "react";
// React.createContext("my state");

const AuthContext = React.createContext({
  isLoggedIn: false,
  // dummy function
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={isLoggedIn:isLoggedIn}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
