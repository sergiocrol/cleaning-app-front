import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => (!user._id
      ? <Component {...props} />
      : <Redirect to="/homepage" />
    )} />
  );
}

export default PublicRoute;