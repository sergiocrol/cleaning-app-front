/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import authService from '../services/auth-service';
import withSpinner from '../components/with-spinner/with-spinner.component';

import { LoadingContext } from './loading-context';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const { showLoading, hideLoading } = useContext(LoadingContext);

  useEffect(() => {
    showLoading();
    let isSubscribed = true
    authService.me()
      .then(user => {
        if (isSubscribed) {
          setUser(user);
          setIsLoggedIn(true);
          hideLoading();
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setUser({});
          setIsLoggedIn(false);
          hideLoading();
        }
      })
    return () => isSubscribed = false;
  }, [])

  const updateUser = () => {
    authService.me()
      .then(user => {
        setUser(user);
      })
      .catch(() => {
        setUser({});
      })
  }

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
    <AuthContext.Provider value={
      {
        user,
        isLoggedIn,
        login: userLogin,
        signup: userSignUp,
        logout: userLogout,
        update: updateUser
      }
    }>
      {props.children}
    </AuthContext.Provider>
  );

}

export default withSpinner(AuthProvider);