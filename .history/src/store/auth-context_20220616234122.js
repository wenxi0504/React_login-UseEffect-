import React, { useState } from "react";
// React.createContext("my state");

const AuthContext = React.createContext({
  isLoggedIn: false,
  // dummy function
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={props.value}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
