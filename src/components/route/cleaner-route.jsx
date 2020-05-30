import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';

const CleanerRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route {...rest} render={(props) => {
      return (
        user.isCleaner
          ? <Component {...props} />
          : <Redirect to="/" />
      )
    }
    } />
  );
}

export default CleanerRoute;