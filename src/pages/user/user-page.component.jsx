import React from 'react';

import MenuUser from '../../components/menu/menu-user.component';
import HomepageUser from '../homepage/homepage-user/homepage-user.component';
import ProfileUser from '../profile/profile-user.component';
import NewJobPage from '../new-job/new-job-page.component';
import CleanerDetailsPage from '../cleaner-details/cleaner-details-page.component';
import UserRoute from '../../components/route/user-route';

import UserProvider from '../../contexts/user-context';

import { WhiteSpace } from './user-page.styles';

const UserPage = () => {
  return (
    <div>
      <UserProvider>
        <UserRoute exact path={`/user`} component={HomepageUser} />
        <UserRoute exact path={`/user/profile`} component={ProfileUser} />
        <UserRoute exact path={`/user/new-job`} component={NewJobPage} />
        <UserRoute path={`/user/cleaner/:cleanerId`} component={CleanerDetailsPage} />
      </UserProvider>
      <WhiteSpace />
      <MenuUser />
    </div>
  );
}

export default UserPage;