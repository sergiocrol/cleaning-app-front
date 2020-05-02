import React from 'react';

import MenuUser from '../../components/menu/menu-user.component';
import HomepageUser from '../homepage/homepage-user/homepage-user.component';
import ProfileUser from '../profile/profile-user.component';
import NewJobPage from '../new-job/new-job-page.component';
import UserRoute from '../../components/route/user-route';

import UserProvider from '../../contexts/user-context';

const UserPage = ({ match }) => {
  const { path } = match;
  return (
    <div>
      <UserProvider>
        <UserRoute exact path={`${path}`} component={HomepageUser} />
        <UserRoute exact path={`${path}/profile`} component={ProfileUser} />
        <UserRoute exact path={`${path}/new-job`} component={NewJobPage} />
      </UserProvider>
      <MenuUser />
      {/*<AddJob />
      <CleanersOverview />
      <UserMenu />*/}
    </div>
  );
}

export default UserPage;