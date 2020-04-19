import React, { useState, useEffect } from 'react';

import authService from '../services/auth-service';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {
    authService.me()
      .then(user => {
        setUser(user);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setUser({});
        setIsLoggedIn(false);
      })
  }, [])

  const userLogin = (user) => {
    return authService.login(user)
      .then((user) => {
        setUser(user);
        setIsLoggedIn(true);
      })
  }

  const userSignUp = (user) => {
    return authService.signup(user)
      .then((user) => {
        setUser(user);
        setIsLoggedIn(true);
        return user;
      })
  }

  const userLogout = () => {
    return authService.logout()
      .then(() => {
        setUser({});
        setIsLoggedIn(false);
      })
  }

  return (
    <>
      {<AuthContext.Provider value={
        {
          user,
          isLoggedIn,
          login: userLogin,
          signup: userSignUp,
          logout: userLogout,
        }
      }>
        {props.children}
      </AuthContext.Provider>
      }
    </>
  );

}

export default AuthProvider;