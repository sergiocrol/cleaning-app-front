import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';

const UserRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route {...rest} render={(props) => {
      return (
        user.isCleaner === undefined
          ? <Component {...props} />
          : <Redirect to="/" />
      )
    }
    } />
  );
}

export default UserRoute;