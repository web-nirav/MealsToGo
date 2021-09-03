import React, { useState, createContext, useEffect } from "react";
import * as firebase from "firebase";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [error, setError] = useState(null);

  // this will run on each render to check if user is logged in or not and set user object in state
  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsLoading(false);
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        // setIsAuthenticated(true);
        setUser(u);
        // console.log("U:", u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        // console.log("E", e);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
