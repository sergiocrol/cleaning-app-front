import React from 'react';

import MenuCleaner from '../../components/menu/menu-cleaner.component';
import HomepageCleaner from '../homepage/homepage-cleaner/homepage-cleaner.component';
import ProfileCleaner from '../profile/profile-cleaner/profile-cleaner-page.component';
import NewAddressPage from '../address/new-address-cleaner/new-address-page-cleaner.component';
import CleanerRoute from '../../components/route/cleaner-route';

import CleanerProvider from '../../contexts/cleaner-context';

import { WhiteSpace } from '../user/user-page.styles';

const CleanerPage = () => {
  return (
    <div>
      <CleanerProvider>
        <CleanerRoute exact path='/cleaner' component={HomepageCleaner} />
        <CleanerRoute exact path='/cleaner/profile' component={ProfileCleaner} />
        <CleanerRoute exact path='/cleaner/new-address' component={NewAddressPage} />
      </CleanerProvider>
      <WhiteSpace />
      <MenuCleaner />
    </div>
  );
}

export default CleanerPage;