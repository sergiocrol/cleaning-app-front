import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => (user._id
      ? <Component {...props} />
      : <Redirect to="/" />
    )} />
  );
}

export default PrivateRoute;