import React, { useState, useEffect } from 'react';

import authService from '../services/auth-service';
import withSpinner from '../components/with-spinner/with-spinner.component';
import Spinner from '../components/spinner/spinner.component';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true
    authService.me()
      .then(user => {
        if (isSubscribed) {
          setUser(user);
          setIsLoggedIn(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setUser({});
          setIsLoggedIn(false);
          setIsLoading(false);
        }
      })
    return () => isSubscribed = false;
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
        return user;
      })
  }

  const userLogout = () => {
    return authService.logout()
      .then(() => {
        sessionStorage.clear()
        setUser({});
        setIsLoggedIn(false);
      })
  }

  return (
    <>
      {isLoading ? <Spinner /> : (
        <AuthContext.Provider value={
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
      )}
    </>
  );

}

export default withSpinner(AuthProvider);