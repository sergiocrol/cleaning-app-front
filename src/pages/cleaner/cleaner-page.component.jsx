import React from 'react';

import MenuCleaner from '../../components/menu/menu-cleaner.component';
import HomepageCleaner from '../homepage/homepage-cleaner/homepage-cleaner.component';
import CleanerRoute from '../../components/route/cleaner-route';

import CleanerProvider from '../../contexts/cleaner-context';

import { WhiteSpace } from '../user/user-page.styles';

const CleanerPage = () => {
  return (
    <div>
      <CleanerProvider>
        <CleanerRoute exact path='/cleaner' component={HomepageCleaner} />
      </CleanerProvider>
      <WhiteSpace />
      <MenuCleaner />
    </div>
  );
}

export default CleanerPage;