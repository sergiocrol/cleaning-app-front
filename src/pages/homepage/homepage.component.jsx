import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';

const Homepage = () => {
  const { user: { isCleaner } } = useContext(AuthContext);

  return (
    <div>
      {isCleaner
        ?
        <Redirect to={'/cleaner'} />
        :
        <Redirect to={'/user'} />
      }
    </div>
  );
};

export default Homepage;