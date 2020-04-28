import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import HomepageUser from './homepage-user/homepage-user.component';
import HomepageCleaner from './homepage-cleaner/homepage-cleaner.component';

import { AuthContext } from '../../contexts/auth-context';

const Homepage = ({ match }) => {
  const { user: { isCleaner } } = useContext(AuthContext);

  return (
    <div>
      <Route exact path={`${match.path}`} render={() => isCleaner ? <HomepageCleaner /> : <HomepageUser />} />

    </div>
  );
};

export default Homepage;